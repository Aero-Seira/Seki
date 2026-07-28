[CmdletBinding()]
param(
    [string]$Message,
    [string[]]$StagePath = @(),
    [switch]$RefreshPackwiz,
    [switch]$Push,
    [switch]$Yes,
    [switch]$SkipFetch,
    [switch]$SkipLocalJarCheck,
    [switch]$AllowPendingDesign,
    [switch]$Help
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Usage {
    @"
Seki safe commit workflow (Windows PowerShell)

Usage:
  .\scripts\commit-pack.ps1 -Message "fix: ..." -StagePath @("config/file.toml", "pack.toml", "index.toml")
  .\scripts\commit-pack.ps1 -Message "chore: update mods" -RefreshPackwiz -Push -StagePath @("mods", "pack.toml", "index.toml", "docs/design")

Options:
  -RefreshPackwiz       Run packwiz refresh before staging.
  -Push                 Fetch/check again and push origin/<current-branch> after commit.
  -Yes                  Skip the final interactive confirmation.
  -SkipFetch            Skip remote fetch/divergence checks.
  -SkipLocalJarCheck    Allow a manifest-only clone without local mods/*.jar.
  -AllowPendingDesign   Do not require docs/design pending counts to be zero.
  -StagePath            Explicit paths/pathspecs passed to git add. If omitted, use existing staged changes.
"@ | Write-Host
}

function Invoke-Checked {
    param(
        [Parameter(Mandatory = $true)][string]$FilePath,
        [string[]]$ArgumentList = @()
    )
    & $FilePath @ArgumentList
    if ($LASTEXITCODE -ne 0) {
        throw "Command failed ($LASTEXITCODE): $FilePath $($ArgumentList -join ' ')"
    }
}

function Get-CheckedOutput {
    param(
        [Parameter(Mandatory = $true)][string]$FilePath,
        [string[]]$ArgumentList = @()
    )
    $output = & $FilePath @ArgumentList
    if ($LASTEXITCODE -ne 0) {
        throw "Command failed ($LASTEXITCODE): $FilePath $($ArgumentList -join ' ')"
    }
    return $output
}

function Find-Python {
    param([Parameter(Mandatory = $true)][string]$Root)
    $localPython = Join-Path $Root "python/python.exe"
    if (Test-Path -LiteralPath $localPython) {
        return @{ File = $localPython; Prefix = @() }
    }
    if (Get-Command python3 -ErrorAction SilentlyContinue) {
        return @{ File = "python3"; Prefix = @() }
    }
    if (Get-Command python -ErrorAction SilentlyContinue) {
        return @{ File = "python"; Prefix = @() }
    }
    if (Get-Command py -ErrorAction SilentlyContinue) {
        return @{ File = "py"; Prefix = @("-3") }
    }
    throw "Python 3.11+ was not found."
}

function Invoke-Python {
    param(
        [Parameter(Mandatory = $true)][hashtable]$Python,
        [string[]]$ArgumentList = @()
    )
    $allArguments = @($Python.Prefix) + $ArgumentList
    Invoke-Checked -FilePath $Python.File -ArgumentList $allArguments
}

function Get-Upstream {
    $upstream = & git rev-parse --abbrev-ref --symbolic-full-name "@{u}" 2>$null
    if ($LASTEXITCODE -eq 0) {
        return ($upstream | Select-Object -First 1).Trim()
    }
    return $null
}

function Assert-RemoteNotAhead {
    param(
        [Parameter(Mandatory = $true)][string]$Branch,
        [switch]$NoFetch
    )
    if (-not $NoFetch) {
        Invoke-Checked -FilePath "git" -ArgumentList @("fetch", "origin", "--prune")
    }
    $upstream = Get-Upstream
    if (-not $upstream) {
        $candidate = "origin/$Branch"
        & git show-ref --verify --quiet "refs/remotes/$candidate"
        if ($LASTEXITCODE -eq 0) {
            $upstream = $candidate
        }
    }
    if (-not $upstream) {
        Write-Warning "No upstream branch was found; divergence check skipped."
        return
    }
    $countsText = (Get-CheckedOutput -FilePath "git" -ArgumentList @("rev-list", "--left-right", "--count", "HEAD...$upstream")) -join " "
    $counts = $countsText.Trim() -split "\s+"
    $ahead = [int]$counts[0]
    $behind = [int]$counts[1]
    Write-Host "Remote divergence: ahead=$ahead behind=$behind ($upstream)"
    if ($behind -gt 0) {
        throw "Remote is ahead. Integrate $upstream before committing or pushing."
    }
}

if ($Help) {
    Write-Usage
    exit 0
}
if ([string]::IsNullOrWhiteSpace($Message)) {
    Write-Usage
    throw "-Message is required."
}

$repoRoot = ((Get-CheckedOutput -FilePath "git" -ArgumentList @("rev-parse", "--show-toplevel")) -join "").Trim()
$branch = ((Get-CheckedOutput -FilePath "git" -ArgumentList @("symbolic-ref", "--short", "HEAD")) -join "").Trim()
$python = Find-Python -Root $repoRoot
$validator = Join-Path $repoRoot "scripts/validate-packwiz-staged.py"
$snapshot = [IO.Path]::GetTempFileName()

Push-Location $repoRoot
try {
    Invoke-Python -Python $python -ArgumentList @($validator, "--root", $repoRoot, "--write-jar-snapshot", $snapshot)
    Assert-RemoteNotAhead -Branch $branch -NoFetch:$SkipFetch

    if ($RefreshPackwiz) {
        $localPackwiz = Join-Path $repoRoot ".tools/packwiz.exe"
        if (Test-Path -LiteralPath $localPackwiz) {
            Invoke-Checked -FilePath $localPackwiz -ArgumentList @("refresh")
        } elseif (Get-Command packwiz -ErrorAction SilentlyContinue) {
            Invoke-Checked -FilePath "packwiz" -ArgumentList @("refresh")
        } else {
            throw "packwiz was not found (.tools/packwiz.exe or PATH)."
        }
    }

    if ($StagePath.Count -gt 0) {
        Invoke-Checked -FilePath "git" -ArgumentList (@("add", "--") + $StagePath)
    }

    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        throw "There are no staged changes. Pass -StagePath or stage files explicitly first."
    }

    Invoke-Checked -FilePath "git" -ArgumentList @("diff", "--cached", "--check")
    $validationArguments = @($validator, "--root", $repoRoot)
    if ($SkipLocalJarCheck) { $validationArguments += "--skip-local-jars" }
    if ($AllowPendingDesign) { $validationArguments += "--allow-pending-design" }
    Invoke-Python -Python $python -ArgumentList $validationArguments

    Write-Host "`nStaged summary:"
    Invoke-Checked -FilePath "git" -ArgumentList @("diff", "--cached", "--stat")
    Write-Host "`nRepository status:"
    Invoke-Checked -FilePath "git" -ArgumentList @("status", "--short")

    if (-not $Yes) {
        $answer = Read-Host "Commit these staged changes? [y/N]"
        if ($answer -notmatch "^[Yy]$") {
            throw "Commit cancelled. Staged files were left unchanged."
        }
    }

    Invoke-Checked -FilePath "git" -ArgumentList @("commit", "-m", $Message)
    Invoke-Python -Python $python -ArgumentList @($validator, "--root", $repoRoot, "--verify-jar-snapshot", $snapshot)

    if ($Push) {
        Assert-RemoteNotAhead -Branch $branch -NoFetch:$SkipFetch
        Invoke-Checked -FilePath "git" -ArgumentList @("push", "origin", "HEAD:$branch")
        Invoke-Python -Python $python -ArgumentList @($validator, "--root", $repoRoot, "--verify-jar-snapshot", $snapshot)
    }

    Write-Host "`nCompleted on branch $branch."
    Invoke-Checked -FilePath "git" -ArgumentList @("status", "--short", "--branch")
} finally {
    Pop-Location
    Remove-Item -LiteralPath $snapshot -Force -ErrorAction SilentlyContinue
}
