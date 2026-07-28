# 配方统一技能阶段 0 可行性试验

## 试验范围

- 日期：2026-07-26
- 技能：`modpack-recipe-unifier`
- 范围：仅执行阶段 0「勘察建索引」与有限索引查询。
- 未执行：设计宪章、冲突审计、配方移除/重写、KubeJS 实施、游戏内验证。
- 原则：不改动玩家可见内容，不对具体冲突作设计裁决。

## 产物

索引生成于仓库根目录 `index/`：

- `mods.tsv`
- `recipes.jsonl`
- `tags.jsonl`
- `items.tsv`
- `names.tsv`

## 已验证事实

| 检查项 | 结果 |
| --- | ---: |
| 扫描到的 JAR | 123 |
| 配方索引行数 | 1440 |
| 物品标签索引行数 | 338 |
| 物品索引行数 | 2925 |
| 本地化名称索引行数 | 1114 |

料理域能够从索引中辨认，主要自定义配方类型包括：

| 配方类型 | 数量 |
| --- | ---: |
| `kaleidoscope_cookery:pot` | 294 |
| `kaleidoscope_cookery:stockpot` | 100 |
| `kaleidoscope_tavern:barrel` | 98 |
| `kaleidoscope_cookery:millstone` | 95 |
| `kaleidoscope_cookery:flex_stockpot` | 28 |
| `kaleidoscope_cookery:flex_pot` | 27 |
| `kaleidoscope_tavern:shaker` | 26 |
| `kaleidoscope_cookery:chopping_board` | 19 |
| `kaleidoscope_tavern:pressing_tub` | 17 |
| `kaleidoscope_cookery:teapot` | 12 |

抽样查询 `kaleidoscope_chinesefood:pot/beef_with_scrambled_eggs` 正确提取出：

- 输入：`c:eggs`、`minecraft:beef`
- 输出：`kaleidoscope_chinesefood:beef_with_scrambled_eggs`
- 容器：`minecraft:bowl`
- 类型：`kaleidoscope_cookery:pot`

这证明索引器能够识别当前森罗厨房扩展使用的自定义锅具配方，而不只是原版合成配方。

## 发现的问题与边界

1. 扫描器终端摘要报告“3248 个物品”，但 `items.tsv` 与 `query_index.py stats` 均为 2925 个物品。两者相差 323，当前无法仅凭产物确认摘要是否把标签引用计入了“物品”；进入正式审计前应澄清或修正该计数口径。
2. 本次扫描目标为实例目录，实际扫描了 `mods/` 下的 123 个 JAR；根目录的 `Seki.jar` 未并入索引。因此原版配方覆盖不完整，正式统一前需要把目标版本 JAR 以临时扫描输入方式纳入，而不是直接污染 `mods/`。
3. 当前仓库存在 88 项新增、23 项修改、2 项移除的既有待归档内容。本试验不接受库存基线，避免把无关用户变更误标为已审阅。
4. Windows PowerShell 默认输出编码会令脚本中文摘要乱码；设置 `PYTHONIOENCODING=utf-8` 与 UTF-8 控制台输出后恢复正常。索引文件本身未发现编码损坏。

## 结论

**阶段 0 可行，技能可以继续使用。** 当前脚本足以低成本建立料理配方事实索引，并能提取自定义类型、输入标签、输出和容器。正式进入阶段 1/2 前，应先补齐原版 JAR 覆盖、确认“物品数”统计口径，再依据方法论建立 `design/charter.md`；在此之前不宜直接编写移除或重写脚本。

