# 设计变更记录

## 2026-08-25 - 迁移分发链：移除 packwiz，改用 mrpack + CI

- 删除 packwiz 管理：`pack.toml`、`index.toml`、`.packwizignore`、全部
  `mods/*.pw.toml` 与 `shaderpacks/complementary-unbound.pw.toml`。
- 删除配套安全提交脚本与 guard CI：`scripts/commit-pack.*`、
  `scripts/validate-packwiz-staged.py`、`.github/workflows/guard-pack-binaries.yml`。
- 引入 mrpack 分发源：根目录 `modrinth.index.json`（187 个远程文件，含
  SHA-1/SHA-512 与多来源下载地址），overrides 同步自 2026-08-15 的平台导出
  （`config/`、`kubejs/`、`defaultconfigs/`、3 个内嵌 jar、汉化资源包）。
- 新增 `scripts/build-mrpack.py` 与 `.github/workflows/build-mrpack.yml`：
  推送 `main` 自动构建 `Seki-1.0.0.mrpack` 并上传 artifact，推送 `v*` 标签时
  附加到 GitHub Release。
- 版本基线更新：NeoForge 21.1.247，整合包版本 1.0.0，模组 190（187 远程 +
  3 内嵌）；相关设计文档与 README 同步改写。

## 2026-07-29 - 按面团谱系分流制面产物

- 新 SQLite（9811 配方，导出于 `2026-07-29T12:48:00.993361400Z`）确认首版统一标签导致死面团在 FD 砧板变成鸡蛋生意面，在 F&C 绞肉机变成农家意面；机器互操作错误覆盖了产物身份。
- 删除过宽 `seki:doughs/noodle`，拆为 3 成员的清水制面组与 2 成员的鸡蛋意面组；F&C 含酵母面团明确标为发酵面团并退出制面体系。
- 森罗切菜板、FD 砧板、Create 切制与 F&C 石磨绞肉机各接受两组互斥输入：清水组统一产出清水生面条，鸡蛋组产出 FD 鸡蛋生意面或 F&C 石磨鸡蛋生意面。
- 横向复核同时删除 8 成员的万能咸食面团标签：驴肉火烧改用 3 成员无酵母火烧组，肉夹馍与汉堡胚改用 3 成员咸味发酵面包组。
- 制面批次调整 4 条同 ID 覆盖并新增 4 条跨机器分流路径；咸食批次另调整 6 条同 ID 覆盖；静态校验后仍需 `/reload`、JEI 实做和再次导出 SQLite 验收。

## 2026-07-29 - 修复碗装汤锅配方字段静默丢失

- 最新运行时 SQLite 发现四条 `seki:` 四川抄手/云吞面动态配方虽已注册，但 KubeJS recipe component 桥静默丢失 carrier、汤底、纹理、颜色与时间字段。
- 对照国味 JAR 原始 stockpot 与内嵌 fuzzy flex_stockpot 配方，确认四条路径均应使用碗、标准汤锅纹理/颜色和 300 tick；四川抄手汤底为熔岩，云吞面汤底为水。
- 将四条配方迁移到 `kubejs/data/seki/recipe/{flex_stockpot,stockpot}/`，保留原 `seki:` ID 和专属生云吞原料；删除脚本 helper 与动态创建逻辑。
- 原国味万能馅面食路径的精确移除规则继续保留；静态校验完成后仍需 `/reload` 与重新导出 SQLite 验收完整字段。

## 2026-07-29 - 收紧面团使用面并开放机器跨模组原料

- 运行时最终态确认 `kaleidoscope_cookery:chopping_board/raw_noodles_from_raw_dough` 使用宽泛 `c:dough`；该标签间接包含 Bakeries 甜面团，形成甜面团可切普通面条的常识漏洞。
- 新增普通小麦粉、制面面团、咸食面团三种基础窄语义标签；四类制面机器以及肉夹馍、驴肉火烧、生汉堡胚按使用面改用对应标签，明确排除三种甜面团。
- F&C 调理碗、Bakeries 搅拌机和 Create 搅拌盆的普通面团/甜面团/蛋糕糊配方改为跨模组普通小麦粉；F&C 和面同时接受已审计的 `c:yeast` 干酵母成员。
- 精确移除 Bakeries 四条不返还酵母玻璃瓶的旧 `compat/create/*_dough` 路径；保留或新增会返瓶的 `integration/create/mixing/*` 路径。
- 横向审计发现 `c:flours/wheat` 同时包含普通 Create 小麦粉与 Bakeries 全麦粉；新增全麦粉窄标签，并覆盖 3 条 Create 普通和面与 2 条 Bakeries 全麦和面路径，阻止普通/全麦语义互换。
- 新鲜静态索引与校验报告为 `NEW ERROR 0`；完整 `/reload`、JEI/实做与重新导出 SQLite 仍待运行时验收。
- 设计与实施记录：[KubeJS](components/content/kubejs.md)、根目录 `design/charter.md`、`docs/food-mod-unification-implementation-v7-2026-07-29.md`。

## 2026-07-29 - 迁移无盛具锅具配方到同 ID 数据包覆盖

- 新 SQLite 与 `server.log` 对齐确认：饺子/生煎动态配方虽加载但产生 18 条空 carrier 警告，肉饼 1~9 份动态配方因 carrier component 为空全部创建失败。
- 根因是 KubeJS `event.custom` 的 recipe component 桥接无法可靠表达森罗 `pot/stockpot` 的无盛具状态，而模组原生 serializer 可以；因此不添加虚假的碗类 carrier。
- 将 27 条饺子、生煎、肉饼配方迁移为原 ID 数据包覆盖，沿用 JAR 字段结构并仅替换为专属生坯；撤销对应删除规则和动态创建逻辑。
- 静态增量校验保持 `NEW ERROR 0`；需再次 `/reload` 并导出 SQLite，确认 KubeJS `ERROR` 归零、三族各 9 条路径均存在且无 carrier。

## 2026-07-29 - 修正料理统一脚本的 Rhino 语法兼容性

- `logs/kubejs/server.log` 将唯一 KubeJS 错误定位到 `food_recipes.js:191`：当前 Rhino 不支持数组字面量展开元素。
- 将四川抄手与云吞面 stockpot 配方的两处数组展开改为 `concat`；原料、份数、配方 ID 和自定义 serializer 字段保持不变。
- 修正后 JavaScript/JSON 校验通过，配方静态增量校验仍为 `NEW ERROR 0`；状态保持运行时待验收，需以新一轮 KubeJS 日志确认错误归零。

## 2026-07-29 - 静态实施料理体系统一 v6

- 新增 11 个 `seki:` 面点中间物/生坯及模型；以待发酵面团适配烘焙坊发酵箱的单输入 serializer，确保酵母实际被消费。
- 新增 189 个现实语义中文名覆盖，桥接盐/面粉/面团/肉馅/酵母/生菜/番茄标签，并移除熟煎蛋、海龟蛋与烂番茄的标签污染。
- 精确移除 41 条旧点心/蒸制/装配/预装蒸笼路径并恢复专属生坯路径；迁移包子、饺子、生煎、肉饼、抄手、云吞面、烤包子与双馒头链。
- 同 ID 覆盖 F&C stove 四条配方：三种面包改用烘焙坊咸面团，苹果派改用 FD 派皮；保留其余甜点心链。
- 保守偏差：瓶装酵母因玻璃瓶语义不加入 `c:yeast`；不存在的 `vintagedelight:salt` 改按实际 `salt_dust` 处理；未给出消费清单的浓缩高汤/复合调味粉留待独立批次。
- 验证状态：JavaScript/JSON、189 个目标 ID、11 个模型纹理通过；新鲜静态基线下 `NEW ERROR 0`。仍需完整重启、`/reload`、JEI/实做与重新导出 SQLite。
- 设计文档：[料理统一实施记录](../../food-mod-unification-implementation-v6-2026-07-29.md)、[KubeJS](components/content/kubejs.md)、根目录 `design/charter.md`。

## 2026-07-29 - 新增跨平台安全提交工作流

- 新增 `scripts/commit-pack.ps1` 与 `scripts/commit-pack.sh`，分别面向 Windows PowerShell 和 macOS/Linux Bash；两者要求显式提供暂存路径，不调用 `git add .`。
- 新增共用校验器 `scripts/validate-packwiz-staged.py`：校验 Git 暂存快照中的 `pack.toml`/`index.toml` 与全部索引文件哈希，阻止 JAR/ZIP 被跟踪或暂存，并验证本地描述符与 JAR。
- 提交前记录全部本地 JAR 的文件名、大小和 SHA-256；提交及可选推送后再次比较，确保 Git 操作没有改动真实实例二进制。
- 提交前执行远端 fetch/分叉检查；远端领先时中止，由维护者明确处理，不自动 pull、merge 或 rebase。
- `scripts/` 已加入 `.packwizignore`，工作流工具只存在于源码仓库，不进入客户端 packwiz 安装内容。
- 验证状态：Python 编译与实机暂存快照验证、PowerShell 帮助入口、Bash 语法检查均通过；设计库存接受后为零 pending。

## 2026-07-29 - 迁移到 packwiz 分发并停止 Git 托管第三方 JAR/ZIP

- 新增 122 个 `mods/*.pw.toml` 与 1 个 Complementary Unbound 光影描述符；根 `pack.toml` / `index.toml` 现负责固定 Minecraft 1.21.1、NeoForge 21.1.235、配置、KubeJS 内容与下载元数据。
- 真实开发实例的 124 个 JAR（286,692,928 字节）保持原位，Git 跟踪 JAR/ZIP 数为 0；描述符与 JAR 同处 `mods/`，由 `.gitignore` 使 GitHub 只展示 `*.pw.toml`。
- packwiz 管理 122 个模组；JECharacters 4.5.26 因官方尚未发布对应构件、ModPack IDE Exporter 0.1.0 因公开来源不可访问，作为两个本地专用例外保留。
- 客户端隔离重建得到 121 个 JAR；Brutal Respawn 的 `side = "server"` 被正确跳过。12 个 CurseForge 作者禁用第三方下载的文件经人工放置后全部通过描述符哈希验证。
- Complementary Unbound r5.8.1 改由 Modrinth 描述符恢复；Euphoria Patcher 展开目录从索引排除。汉化 ZIP 经 `logs/I18nUpdateMod.log` 确认为运行时动态合成物，不建立固定下载项。
- 扫描器同时观察到 AsyncParticles/Iris/PacketFixer 时间戳、Inventory Particles 图集缓存、JEI 世界搜索历史、`usercache.json`、动态汉化 ZIP 与 Euphoria 本地设置刷新；这些均为已核实的运行时派生状态，不进入本次 Git 分发内容，也不删除玩家文件。
- 为保证 GitHub 原始文件与 `index.toml` 哈希一致，新增 `.gitattributes` 并将 77 个被 packwiz 索引的文本配置从 CRLF 规范为 LF；逻辑键值没有变化。扫描器本轮共记录 78 个修改项（含 `pack.toml` 索引哈希），属于分发字节规范化而非游戏设计改动。
- 安全约束：禁止在真实实例执行 `packwiz curseforge detect` 或安装清理；所有检测和重建都在 `.tools/` 隔离目录完成。普通 Git 提交/推送不会删除未跟踪且已忽略的本地 JAR。
- 验证状态：122 个模组描述符均与真实 JAR 唯一哈希匹配；官方 packwiz-installer v0.5.14 隔离重建成功；客户端文件与描述符、真实实例三方哈希一致。
- 设计文档：[mrpack 分发与 CI 构建](components/platform/mrpack-distribution.md)、[JECharacters](components/utility/jecharacters.md)、[ModPack IDE Exporter](components/other/mpide-exporter.md)、[汉化资源包](components/resourcepacks/minecraft-mod-language-modpack-converted-1-21-1.md)、[默认光影](components/aesthetic/complementary-euphoria-shaders.md)。

## 2026-07-28 - 设计决策：取消 Chapters 阶段锁定体系；项目更名 Seki 并转向生活冒险定位

- 维护者裁决：本包不使用 Chapters/GameStages 类阶段解锁系统，设计思路与"版本即章节"方案不同。设计支柱 2 已由"类原版起步，阶段式解锁"修订为"内容直接投放，无阶段门控"。
- 同日根 README 全面重写（verified）：项目由 ProjectNautic 的 Toudai（灯台）Basepack 更名为 **Seki**，定位从"不装载内容的基底整合包"转向"围绕料理、探索与战利品的生活冒险整合包"；启动器档案 `Toudai.json` → `Seki.json` 同步印证。设计文档产品定义已同步更新。
- 影响面：README（产品定义、支柱 2、当前阶段表述、跨系统约束"阶段锁定"→"内容投放节奏"、调研报告条目加历史参考注）、kaleidoscope-cookery 与 vanillabackport 组件页（移除 Chapters 待办/约束）；上一批次条目中"Chapters 阶段锁定为最高优先级待办"的结论作废。
- 保留：`research-report-v1.md` 不改写，作为已完成调研的历史记录，其 Chapters 选型结论已被本决策取代。
- 新增内容模组的风险把关方式随之切换：由"阶段默认锁定"改为"批次规划 + 实机验证"。

## 2026-07-28 - 第七批归档：首个内容章节（森罗料理家族）+ 战利品反馈强化线 + tooltip 体系替换

- 背景：Base Pack 收尾（2026-07-21，105 模组基线）后，维护者分批投放了首个内容章节与配套体验层；本条目将累积的 100 项新增、23 项修改、2 项移除整体归档，并接受新的库存基线。
- 新增模组（20 个，均已建档）：
  - **料理章节（森罗物语家族）**：[厨房本体](components/content/kaleidoscope-cookery.md) 1.4.1、[国味](components/content/kaleidoscope-chinesefood.md) 1.1.8、[酒馆](components/content/kaleidoscope-tavern.md) 1.2.0、[玩偶](components/content/kaleidoscope-doll.md) 1.4.1、[下界](components/content/kaleidoscope-nether.md) 1.1.4、[末地](components/content/kaleidoscope-end.md) 1.0.14、[次元酒](components/content/kaleidoscope-dim-wine.md) 1.5.3（第三方）、[世界酒](components/content/kaleidoscope-world-liquor.md) 1.1.7（第三方）、[兼容层](components/integration/kaleidoscope-compat.md) 2.9.7、[思索教学](components/integration/ponderforkc.md) 1.0.0
  - **战利品反馈强化线**：[Lootr](components/content/lootr.md)（每人独立战利品，多人运营基础）、[GachaAddiction](components/aesthetic/gachaaddiction.md)（开箱抽奖演出）、[Loot Beams Refork](components/aesthetic/lootbeams.md)（掉落物光束）、[RarityCore](components/library/raritycore.md)（稀有度数据层，其 auto_rarity 映射已覆盖森罗全家族物品，verified）
  - **tooltip 体系替换**：[Tooltip Overhaul](components/aesthetic/tooltipoverhaul.md) 1.5.1 替代 Obscure Tooltips，3D 物品/盔甲预览默认开启
  - **内容回移植**：[VanillaBackport](components/content/vanillabackport.md) 1.1.7.10
  - **依赖库**：[Nirvana Lib](components/library/nirvana-lib.md) 2.2.0、[Platform](components/library/platform.md) 1.3.3、[Common Networking](components/library/commonnetworking.md) 1.0.21
  - **开发工具链**：[ModPack IDE Exporter](components/other/mpide-exporter.md) 0.1.0（运行时最终态 SQLite 导出，已支撑配方修正验证）
- 移除：Obscure Tooltips 4.2.2（组件页移入 `_archive`，状态 removed；遗留 `config/obscuria/obscure_tooltips-client.toml` 孤儿配置）；启动器档案 `Toudai.json` → `Seki.json`（重命名，verified 为 remove+add 对）
- 已建档配置：各森罗模组 common/client toml（默认生成）、`kaleidoscope_compat.jsonc`（COMPAT 模式 + 模糊配方）、tooltipoverhaul 双配置、lootbeams 五配置、gachaaddiction-client、lootr 双配置、vanillabackport 双配置、raritycore 三配置、colortooltips 样式表、pack.toml
- 孤儿配置（无对应 JAR，verified）：`config/legendarytooltips.toml`、`config/colortooltips/` 样式表归属待实机核实，暂不清理
- 噪音项（仅记录，不建档）：`config/inventory-particles/cache/**`（12 组运行时粒子图集缓存）、`spark/activity.json`、`jei/world/local/**/lookupHistory.json`、`usercache.json`、`asyncparticles-mixin.properties`、`iris.properties`、`packetfixer.properties`、fml.toml、jade/jei 排序配置等运行时重写；`kaleidoscope_chinesefood-common-1.toml.bak` 为升级迁移残留
- 汉化资源包与光影设置 txt 内容刷新（verified，随新模组译名更新），已更新既有组件页历史口径
- 设计影响：
  - "类原版起步"阶段正式结束：整合包首次引入注册表内容模组，存档兼容性约束从"暂无风险"升级为硬要求（README 已同步）
  - 多人运营基础落地：Lootr 独立战利品 + 抽奖/光束演出构成长线运营的奖励体验闭环
  - 视听叠加清单新增 Tooltip Overhaul 3D 预览、Loot Beams、GachaAddiction 三项，低配回归范围扩大
  - Fragmentum 依赖链解除（Obscure Tooltips 移除），库去留待核
- 验证状态：全部 125 项 pending 变更经本地文件核实；新内容未经实机启动验证，森罗下界/末地与 VanillaBackport 的世界生成范围、tooltip 叠加观感均为最高优先级待办
- 遗留问题：各新模组配置均为默认值，首次实机体验后需逐项收敛（注：本条最初提出的"Chapters 阶段锁定缺失"已被同日设计决策否决，见上方决策条目）

## 2026-07-28 - 修复森罗厨房本体五种盖饭路径

- verified：红烧牛肉、鱼香肉丝、番茄炒蛋、青椒炒肉、糖醋里脊的盖饭均使用 `kaleidoscope_cookery:rice_bowl` 工作台路径，且缺少对应熟米饭 carrier 的炒锅路径。
- 将五个稳定错误 recipe ID 加入 `rice_carrier_paths.js` 与 `removes.txt`，不批量移除森罗其他配方类型。
- 在 `kubejs/data/kaleidoscope_cookery/recipe/pot/` 新增五条正确配方；原料逐项复制森罗厨房 1.4.1 对应标准 `pot` 配方，carrier 改为 `#c:foods/cooked_rice`。
- 修正 `.gitignore`：将 `data/` 收窄为根目录 `/data/`，确保全部 `kubejs/data` 配方可以进入版本控制与发布包。
- 保留模组默认翻炒次数与处理时间；不复制 `flex_pot` 简化路径，不把炒锅启动油脂写入 recipe ingredients。
- 验证状态：Node.js 语法检查通过；服务器脚本与数据配方均为 0 WARN；9 条移除规则全部命中。五条逐字段一致性检查通过，静态最终态每个盖饭仅剩一条 `pot` 路径。仍需 `/reload` 后重新导出 SQLite 完成运行时验收。

## 2026-07-28 - 修复国味 1.1.8 的四种盖饭路径回退

- verified：新 Exporter SQLite 完整性为 `ok`、外键违规为 0；国味四条盖饭配方的 `raw_json.type` 均为 `kaleidoscope_cookery:rice_bowl`，顶层 `type_id` 仅显示为通用 `minecraft:crafting`。
- verified：四个盖饭物品与四个对应基础炒菜均已注册；运行时不存在这四个输出的 `kaleidoscope_cookery:pot` + 熟米饭 carrier 路径。
- 更新 `kubejs/server_scripts/unify/rice_carrier_paths.js`：按稳定 recipe ID 移除四条 `rice_bowl` 路径，同时保留旧版无序配方过滤。
- 在 `kubejs/data/kaleidoscope_chinesefood/recipe/pot/` 恢复四条规范配方：原料来自国味 1.1.8 当前对应基础炒菜，carrier 为 `#c:foods/cooked_rice`，参数为 3 次翻炒 / 200 tick。
- 范围约束：不修改森罗厨房本体另外五条 `rice_bowl` 配方，不把炒锅启动油脂写入配方材料。
- 验证状态：Node.js 语法检查通过；服务器脚本与数据配方校验均为 0 WARN；4 条移除规则全部命中，逐字段一致性检查通过。校验器报告的 6 个循环均为既有全局问题。仍需 `/reload` 并重新导出 SQLite，确认每个盖饭只有一条正确炒锅生产路径。

## 2026-07-26 - 统一四种国味盖饭的炒锅盛取路径

- verified：四条正确配方均为 `kaleidoscope_cookery:pot`，并使用 `carrier: #c:foods/cooked_rice`；对应输出为滑蛋牛肉盖饭、地三鲜盖饭、小炒黄牛肉盖饭、回锅肉盖饭。
- 新增 `kubejs/server_scripts/unify/rice_carrier_paths.js`：按 `minecraft:crafting_shapeless` 类型与四个输出 ID 双重过滤，移除“对应炒菜 + 米饭”的错误工作台路径，保留原始炒锅路径。
- 撤回上一轮三份锅炒数据覆盖：森罗油脂是炒锅外部启动资源，不属于 recipe ingredient；`POT-TRIAL-01` 标记为 withdrawn。
- 静态证据：错误路径不在任何 JAR recipe JSON 或兼容模组内嵌数据包中，无法取得稳定 recipe ID，因此不能用 `removes.txt` 的 ID 正则表示；游戏内 JEI 检查是本批必须完成的命中验证。
- 设计影响：盖饭重新遵循“烹饪完成后以熟米饭盛取”的机器交互，不再允许绕过炒锅的工作台二次组合。
- 验证状态：Node.js 语法检查通过；静态校验 0 WARN，相对基线新增 0 ERROR，6 个全局循环均为既有问题。待执行 `/reload`，确认四种盖饭只剩炒锅配方，并分别实做一次米饭盛取。

## 2026-07-26 - 新增三道锅炒配方统一风格样例（已撤回）

- 在 `kubejs/data/kaleidoscope_chinesefood/recipe/pot/` 新增三份同 ID 数据包覆盖，按试验宪章的 `POT_STD` 重写牛肉炒蛋、干锅鸡、回锅肉；输出物品、配方 ID 与模组原有字段结构保持不变。
- 不执行配方移除，也不创建平行新 ID；KubeJS 数据包按加载优先级直接覆盖模组内同名配方，避免 JEI 同时出现新旧路径。
- 风格变化：三道锅炒菜统一加入一份 `kaleidoscope_cookery:oil`，统一使用碗、3 次翻炒和 200 tick；回锅肉保留熟猪肉前置工序。
- 标签裁决：干锅鸡继续使用 `c:foods/raw_chicken` 与 `c:crops/chilipepper`；牛肉炒蛋暂用 `minecraft:egg` 与 `minecraft:beef` 精确物品，避免当前公共标签把煎蛋、海龟蛋或生牛杂纳入。
- 设计状态：experimental，等待用户检查 JEI 表现、材料成本与实做手感后再决定是否扩展。
- 验证状态：本批静态校验 0 WARN，且相对基线新增 0 ERROR；`index/validate_report.md` 与 `validate_baseline.md` 都报告整合包原有的 6 个配方循环。游戏内 `/reload`、KubeJS 日志、JEI 唯一路径和实际炒制仍待确认。

## 2026-07-26 - 完成配方统一技能阶段 0 可行性试验

- 仅执行 `modpack-recipe-unifier` 的勘察建索引阶段，新增根目录 `index/` 五项机器索引；未修改、移除或新增任何游戏配方。
- 扫描事实：123 个 JAR、1440 条配方、338 条物品标签；`items.tsv` 与查询统计均为 2925 个物品。
- 料理域可识别：`kaleidoscope_cookery:pot` 294 条、`stockpot` 100 条、`kaleidoscope_tavern:barrel` 98 条、`millstone` 95 条，并成功抽样解析森罗国味锅具配方的输入、输出与容器。
- 新增试验报告：[配方统一技能阶段 0 可行性试验](research/recipe-unifier-stage0-feasibility.md)，记录统计口径差异、原版 JAR 尚未纳入及 Windows 输出编码要求。
- 结论：阶段 0 可行；进入立宪/冲突审计前必须补齐原版配方覆盖并澄清扫描摘要“3248 个物品”与索引“2925 个物品”的口径差异。
- 基线状态：当前另有 88 项新增、23 项修改、2 项移除的既有待归档内容，本次不接受库存基线。

## 2026-07-21 - Base Pack 收尾：归档实机验证产生的最终变更，105 模组基线定稿

- 背景：维护者于当日 19:49 前后完成一次完整实机启动验证（各配置/光影/会话文件 mtime 一致印证），随后宣布当前整合包作为 **Base Pack** 收尾。
- 修改（实质 delta，已更新对应组件页历史）：
  - **GUI Tween 主开关 `enable` false → true**（`config/guitween-client.toml`，verified）：第六批遗留的"有意默认还是试用遗留"开放问题由实机行动裁决，组件状态 experimental → active；分组动画参数全部保持作者预设默认值
  - **汉化资源包内容更新**：`Minecraft-Mod-Language-Modpack-Converted-1.21.1.zip` 文件数 2157→2158、lang 文件 1096→1097（+734 字节），连续第三日刷新，覆盖新增模组译名（verified）
- 噪音项（仅记录，不建档）：`asyncparticles-mixin.properties`、`iris.properties`、`packetfixer.properties`、光影设置 txt 均为关闭游戏时的运行时重写（大小不变，仅时间戳/键序刷新，verified）；`usercache.json` 为登录会话缓存续期（expiresOn 2026-08-21），属运行数据
- 设计文档更新：[GUI Tween 组件页](components/aesthetic/guitween.md)（状态、配置意图、开放问题裁决、历史）、[汉化包组件页](components/resourcepacks/minecraft-mod-language-modpack-converted-1-21-1.md)（历史）、README（当前阶段标记 Base Pack 定稿、GUI Tween 条目与视听叠加约束同步）
- 设计影响：
  - Base Pack 内容基线定稿：105 个模组（NeoForge 96 + Fabric 8 格式）、1 个资源包、3 个光影包、165 个配置、9 项脚本内容，全部进入已接受清单，后续变更均从新基线起算
  - 视听叠加风险约束中"GUI Tween 关闭"的缓解假设失效，HUD/动画层全量生效状态下的低配实机回归优先级上升
  - 后续开发按设计支柱以"章节解锁"方式投放内容模组，不再直接扩充 Base Pack 本体
- 验证状态：7 项 pending 变更全部经本地文件核实；GUI Tween 启用后的动画叠加观感、Stylish Effects vs Inventory HUD+ 药水 HUD 二选一裁决仍待实机确认
- 剩余问题：继承第六批全部剩余问题（HUD 重叠裁决、MEED/JEED 重叠、Acedium 非 NVIDIA 行为、BetterDays 睡眠提示本地化等）；新增"GUI Tween 启用后动画叠加回归"一项

## 2026-07-21 - 加载第六批 HUD/性能/机制模组，首次落地机制改动并归档 4 个移除组件

- 新增模组 **21 个**，按设计角色分类：
  - **性能**：[EntityCulling](components/performance/entityculling.md) 1.10.5（异步路径追踪实体剔除，内嵌 TRansition/TRender）、[Acedium Sodiumized](components/performance/acedium.md) 0.4.1（Nvidium 延续，依赖 Sodium 0.8，NVIDIA mesh shader）、[Alternate Current](components/performance/alternate-current.md) 1.9.0（红石线 BFS 重写）、[Krypton FNP](components/performance/krypton-fnp.md) 0.2.28.1（网络栈优化）、[Noisium](components/performance/noisium.md) 2.7.0（世界生成噪声优化）、[PacketFixer](components/performance/packetfixer.md) 3.3.1（数据包容错）
  - **视听/HUD**：[GUI Tween](components/aesthetic/guitween.md) 3.3.7（全分组 GUI 动画，主开关默认关闭，experimental）、[Stylish Effects](components/aesthetic/stylisheffects.md) 21.1.3、[Enhanced Boss Bars](components/aesthetic/enhancedbossbars.md) 1.0.0、[Overflowing Bars](components/aesthetic/overflowingbars.md) 21.1.1、[Leave My Bars Alone](components/aesthetic/leavemybarsalone.md) 21.1.2、[Distinguished Potions](components/aesthetic/distinguishedpotions.md) 21.1.1
  - **工具/QoL**：[Pick Up Notifier](components/utility/pickupnotifier.md) 21.1.1、[Pixelshot](components/utility/pixelshot.md) 21.1.1、[MEED](components/utility/meed.md) 8.0.1（与 JEED 功能重叠待裁决）、[Inventory HUD+](components/utility/inventoryhud.md) 3.4.28、[Configured](components/utility/configured.md) 2.6.3、[Armor Statues](components/utility/armorstatues.md) 21.1.0、[Leaves Be Gone](components/utility/leavesbegone.md) 21.1.1
  - **内容/机制**：[BetterDays](components/content/betterdays.md) 3.3.6.3（时间流速/睡眠加速，昼夜速度保持 1.0）、[Brutal Respawn](components/content/brutal-respawn.md) 1.1（1 血 0 食重生，落地 [死亡惩罚调研](research/death-penalty-mods.md) 需求 1 结论）
- 移除模组 **4 个**（页面已归档至 `components/_archive/`，README 系统地图同步删除）：
  - SmoothGui → 由 [GUI Tween](components/aesthetic/guitween.md) 替代
  - EffectTimerPlus → 由 [Stylish Effects](components/aesthetic/stylisheffects.md) 替代（功能上位）
  - Tiny Item Animations → 物品缩放动画由 GUI Tween 与既有动画层覆盖（inferred）
  - Gnetum → 第五批加入仅一天即撤出；HUD 分帧收益未验证即遭遇 HUD 扩容，与 ImmediatelyFast `hud_batching`（本批亦关闭）同维度叠加，待单独评估（inferred）
- 废弃配置清理（用户明确要求，删除前已快速核对均为默认或无迁移价值）：`config/effecttimerplus.json`、`config/gnetum.json`、`config/smoothgui.json`、`config/tia-client.toml`；其中 `config/gnetum.json` 为本次首启新生成后随即删除，既不算新增也不算遗留
- 修改（实质 delta，已更新对应组件页历史）：
  - ImmediatelyFast `hud_batching` true → false（规避与新 HUD 层叠加）
  - ModernUI 增强 tooltip 关闭（`[tooltip] enable=false`，推断让位 Obscure Tooltips）
  - Smooth Scrolling 快捷栏/聊天平滑度收敛至 0~0.1、关闭快捷栏 rollover
  - Smooth Swapping 动画曲线首控制点 0.1875 → 0.1171875
- 噪音项（仅记录，不建档）：JEI 按存档生成的 `config/jei/world/local/新的世界/bookmarks.json` 与 `lookupHistory.json`；JEI `ingredient-list-mod-sort-order.ini` 因新模组加入变化（预期）；`config/spark/activity.json`、`usercache.json` 运行数据；AsyncParticles mixin 属性、modernfix-mixins、Iris `enableShaders`（本地开关 false→true）、语言资源包 zip、光影设置 txt 时间戳刷新
- 孤儿配置（无对应模组 jar，暂不建档，待确认来源）：`config/raritycore/` 下 6 个 json（对应 RarityCore 类稀有度模组，mods/ 中无此 jar，疑为试用残留）；`config/healthbars-client.toml`（Fuzs 风格血条模组配置，无对应 jar）；`config/catalogue.properties` 与 `catalogue_favourites.txt`（MrCrayfish Catalogue 模组菜单配置，本包装的是 Configured 而非 Catalogue）。归属已查明并计入对应组件页：`nvidium-config.json` 属 Acedium、`whitenoise-client.toml` 属 BetterDays 内嵌库、`transition.json`/`trender.json` 属 EntityCulling 内嵌库
- 设计影响：
  - HUD/血条体系大幅扩充，药水效果 HUD 出现 Stylish Effects vs Inventory HUD+ 的重叠，需二选一
  - 死亡惩罚机制落地（调研结论需求 1）；需求 2（连死改复活点 KubeJS 脚本）尚未落地，1 血 0 食配置下连死风险敞口存在
  - 性能矩阵补齐网络栈（Krypton FNP）、数据包容错（PacketFixer）、红石（Alternate Current）、世界生成噪声（Noisium）、实体剔除（EntityCulling）、渲染进阶（Acedium）六个维度；模组总数 105
  - BetterDays 是首个机制类模组（时间/睡眠），配置克制（昼夜 1.0，仅睡眠加速）
- 验证状态：新模组元数据均从 jar 内 neoforge.mods.toml 核实；启动测试、HUD 重叠裁决、联机回归、Noisium 同种子世界生成一致性验证均待完成
- 剩余问题：
  - Stylish Effects 与 Inventory HUD+ 药水 HUD 二选一
  - MEED 与 JEED 效果描述重叠的实机裁决
  - GUI Tween 主开关 `enable=false` 是有意默认还是试用遗留
  - Armor Statues 依赖的 `statuemenus` 提供者待启动日志确认
  - Acedium 在非 NVIDIA 环境的行为待验证
  - BetterDays 睡眠提示消息未本地化

## 2026-07-20 - 完成惜命机制（死亡惩罚）模组调研

- 新增 `docs/design/research/death-penalty-mods.md`：围绕"重生低血量/低饱食度惩罚"与"连续死亡改复活点防刷命"两个需求，核实了 12+ 个候选模组的 NeoForge 1.21.1 支持情况。
- 推荐结论：**Brutal Respawn 1.1**（需求 1，已验证 neoforge 1.21.1 构建）+ **KubeJS 脚本自实现连死改复活点**（需求 2，随机复活类模组均无 1.21.1 构建）；备选为全 KubeJS 自实现；Better Respawn / Corail Tombstone / PlayerRevive 等方向相反而不推荐。
- 设计影响：若采纳，将新增 1 个纯服务端模组与 1 个 KubeJS server script，符合"魔改即基础设施"与服务端/客户端分离支柱。
- 验证状态：候选模组版本与加载器经 Modrinth API / CurseForge 核实；Brutal Respawn 实际数值与脚本效果待实测。

## 2026-07-20 - 加载第五批性能与修复类更新

- 新增模组 **4 个**（均为 decce 作品）：
  - **性能**：Ixeris 4.5.2（输入缓冲与线程化事件轮询，clientSideOnly）、Async Logger 2.1.2（log4j2 异步化与过滤）、Gnetum 3.3.6（HUD 更新分帧）
  - **QoL**：Progress Peek 1.0.2（任务栏显示游戏加载进度）
- 升级替换（旧 jar 删除、历史合并入组件页）：Placebo 9.9.1 → 9.9.2、Rhino 2101.2.7-build.85 → 2101.2.8-build.91、ModernFix 5.27.15 → 5.27.20
- 新增配置：`asynclogger.toml`（全默认，预留过滤文件 `asynclogger/default.toml`）、`ixeris.toml`（`flexibleThreading=true`，实验性缓存不启用）、`progresspeek.toml`（默认启用）、`newvisualkeybing/keybind_profiles.json`（NewVisualKeybing 生成的新档案文件，profiles 为空，无新模组）
- 修改（实质 delta）：Obscure Tooltips 关闭 3D 盔甲预览（`armorPreviewEnabled=false`）；Smooth Scrolling 快捷栏 `smoothness` 0.5 → 0.1（回调优先响应速度）；Iris `enableShaders` true → false（本地状态，官方默认光影指向不变）
- 修改（噪音，仅记录）：AsyncParticles mixin 配置与 EuphoriaPatches 设置 txt 仅时间戳刷新；`sodium-options.json` 仅捐赠提示已读标记；语言资源包 zip 内容再次更新
- 设计文档更新：新建 4 个组件页（performance/ixeris、asynclogger、gnetum + utility/progresspeek）；更新 Rhino / ModernFix / Placebo / Iris / Obscure Tooltips / Smooth Scrolling / NewVisualKeybing / AsyncParticles / 语言包 / 光影页历史；README 系统地图、阶段描述与性能预算（约 90 模组）同步
- 设计影响：
  - 性能矩阵补齐输入管线（Ixeris）、HUD 分帧（Gnetum）、日志 I/O（Async Logger）三个维度，配合 HUD 模组众多的现状针对性明显
  - 模组数约 90，启动耗时上升，Progress Peek 缓解等待体验
  - Rhino 升级涉及 KubeJS 硬依赖链，需回归脚本系统
- 验证状态：已扫描整合包，新模组元数据均从 jar 内 mods.toml 核实；启动测试、HUD 分帧显示回归、KubeJS 脚本回归尚待完成
- 剩余问题：
  - Gnetum 的 HUD 分帧可能造成饥饿值/效果计时等 HUD 元素轻微跳变，需主观验证
  - Async Logger 异步写入在崩溃瞬间可能丢失日志尾部，排障时需知悉
  - Iris `enableShaders=false` 是本地状态还是有意默认待定（若作为整合包默认需在说明中告知玩家如何开启）

## 2026-07-19 - 加载第四批视觉与协作体验模组，确立官方默认光影

- 新增模组 **14 个**，按设计角色分类：
  - **视觉/音效/视角**：Euphoria Patcher 1.9.3、Entity Texture Features 7.1、Presence Footsteps [FORGE] 1.0.0（非官方 NeoForge 移植）、Shoulder Surfing Reloaded 5.0.7、Obscure Tooltips 4.2.2
  - **多人协作 / QoL**：Ping Wheel 1.12.2、Resourcify 1.8.5、Polymorph 1.1.0+1.21.1
  - **集成扩展**：Ping to Map 1.1.0（Ping Wheel → Xaero 临时路径点）、SSR Camera Fixes 2.0.0（越肩视角战斗兼容，Epic Fight 等未到位，处前向兼容空窗期）
  - **依赖库**：Fragmentum 2.2.4（Obscure Tooltips 前置）、Iceberg 1.3.2、Prism 1.0.11（Grend 系库，暂无包内下游，引入动机待确认）
- 新增光影：**Complementary Unbound r5.8.1 + EuphoriaPatches 1.9.3**（基础 zip + 补丁衍生目录 + 设置 txt），`iris.properties` 已预置为默认 `shaderPack`——官方默认视觉基调首次确立
- 升级替换（旧 jar 删除、历史合并入组件页）：JEI 19.38.0.366 → 19.39.0.368、Xaero's Minimap 26.3.0 → 26.4.2、Xaero's World Map 1.43.0 → 1.44.2
- 修改：Placebo 9.9.1 jar 刷新（无版本 delta）、Smooth Scrolling 快捷栏 `smoothness` 0.2 → 0.5、AsyncParticles mixin 配置重新生成（仅时间戳）、语言资源包内容更新、Xaero minimap profile 文件（属 `config/xaero/` 个人数据，git 忽略）
- 新增配置：ETF、Euphoria Patcher、Obscure Tooltips、Ping to Map、Ping Wheel（客户端+服务端限流）、Presence Footsteps（关闭内置更新检查）、Resourcify（Modrinth 默认源）、Shoulder Surfing、SSR Camera Fixes
- 设计文档更新：新建 14 个组件页 + 1 个光影页；更新 JEI / Xaero 两图 / Iris / Smooth Scrolling / AsyncParticles / Placebo / 语言包页面；README 系统地图、性能预算（约 85 模组）、着色器与依赖链约束同步
- 设计影响：
  - 视觉基线从"无预置光影"升级为"官方默认光影 + 实体纹理增强 + 风格化 tooltip"，视觉风格统一支柱落地
  - 多人协作闭环建立：Ping Wheel（标记）→ Ping to Map（沉淀为 Xaero 临时路径点）
  - 新增依赖链：Fragmentum → Obscure Tooltips、Shoulder Surfing → SSR Camera Fixes、Ping Wheel → Ping to Map
  - 视听叠加风险进一步上升（光影 + ETF + 脚步声 + tooltip 动画），低配验证紧迫性提高
- 验证状态：已扫描整合包，新增模组元数据均从 jar 内 mods.toml 核实；启动、多人 ping 联动、光影帧率测试尚待完成
- 剩余问题：
  - Prism / Iceberg 暂无包内下游模组，引入动机待确认（可考虑移除或为 Grend 系模组预留）
  - 光影设置 txt 随包分发与玩家本地修改的升级冲突策略未定
  - Presence Footsteps 为非官方移植，长期维护性待观察
  - SSR Camera Fixes 对应的战斗模组（Epic Fight 等）尚未安装，处于空窗期
  - 仓库根目录存在若干研究笔记 md（结构修复/地牢/机制保护等主题），未纳入 docs/design，是否归档待决定

## 2026-07-16 - 加载第三批 QoL、本地化与视听反馈模组

- 新增模组 **约 41 个**（第三批），按设计角色分类：
  - **性能优化**：BadOptimizations 2.4.1、FastSuite 6.0.7、Flerovium 1.1.2、Cupboard 3.8
  - **视觉/粒子/音频/动画**：Ambiance 1.1.0、AmbientSounds 6.3.8、Visuality: Reforged 2.1.0、Particular 1.5.5、Effectual 1.4.0、Particle Effects 1.5.0、Inventory Particles 2.6.0、Extra Sounds 1.5.2、Tiny Item Animations 1.2.1、Smooth Swapping 0.9.3.2、SmoothGui 2.0.1、Smooth Scrolling 1.0.1、Chat Impressive Animation 1.6.0
  - **聊天/社交**：No Chat Reports 2.9.1、Chat Heads 0.15.2、Beautified Chat Server 3.2、ChatNotify 2.6.9
  - **信息/便利**：Better Advancements 0.4.3.21、Clickable Advancements 3.8、Effect Descriptions 21.1.1、EffectTimerPlus 2.2.7、Screenshot to Clipboard 1.0.10、I18nUpdateMod 3.7.0、Just Enough Characters 4.5.26
  - **依赖库**：Architectury 13.0.8、Cloth Config v15 15.0.140、Collective 8.39、Configuration 3.1.1、Fzzy Config 0.7.6、Kotlin for Forge 5.12.0、MossyLib 1.5.0、Placebo 9.9.1、Puzzles Lib 21.1.52、TLib 1.5.0、YetAnotherConfigLib 3.8.2
  - **集成/其他**：AsyncParticles 21.1.2.0
- 新增资源包：**Minecraft Mod Language Modpack Converted 1.21.1**（社区简体中文翻译包）
- 新增配置文件：所有新增模组生成的默认/初始配置，包括 NoChatReports 系列、Visuality 粒子发射器、AmbientSounds 声景、Particular 环境粒子、FastSuite 并行配方、Flerovium 剔除选项等
- 设计文档更新：
  - 更新 `README.md` 产品阶段、系统地图（新增 41+ 组件条目）、性能预算、跨系统约束
  - 创建 41 个组件文档（按类别分目录存放），覆盖新增模组与资源包
- 设计影响：
  - 整合包从"轻量包"进入"中量包"区间，模组总数约 70
  - 中文玩家体验基线建立（自动汉化更新 + 社区汉化包 + JEI 拼音搜索）
  - 聊天/社交体验完整（禁用举报、头像、服务器格式、关键词通知）
  - 信息查询与进度体验增强（Better Advancements、Clickable Advancements、效果说明/计时器）
  - 环境视听反馈层完整，但多个粒子/音效模组叠加带来低配设备性能与感知噪音风险
  - 底层性能优化进一步扩展（配方并行、剔除、微优化），与现有 Sodium/Lithium/ModernFix 形成互补
- 验证状态：已扫描整合包，所有新增模组元数据、配置文件与资源包已记录；实际启动测试、低配性能测试、多人聊天/社交行为验证尚待完成。
- 剩余问题：
  - 多个视听模组在低配硬件上的叠加性能影响需实测并制定关闭建议
  - I18nUpdateMod 与 Minecraft Mod Language Modpack 的加载顺序/覆盖关系需向玩家明确
  - 部分粒子模组（Effectual / Particular / Visuality / Ambiance）在火源、灵魂沙、洞穴尘埃等场景存在效果重叠风险
  - FastSuite 对 KubeJS 动态配方与自定义配方线程安全性的影响需回归验证

## 2026-07-16 - 加载第二批基础模组与 QoL 扩展

- 新增模组 **20 个**：
  - **性能优化**：C2ME 0.4.0-alpha.0.115、ModernFix 5.27.15、Ferrite Core 7.0.3、CullLeaves 4.1.1、Sodium Extra 0.9.3、ScalableLux 0.3.0-alpha.0.6
  - **视觉/UI**：NewVisualKeybing 0.6.16
  - **QoL 工具**：Mouse Tweaks 2.26.1、AppleSkin 3.0.9、Just Enough Resources 1.6.0.17、Just Enough Effects Descriptions 2.3.2、Xaero's Minimap 26.3.0、Xaero's World Map 1.43.0、Chunky 1.4.23、spark 1.10.124
  - **集成扩展**：Jade Addons 6.1.0、JER Integration 6.5.0、KubeJS Data Component 1.0.1、LootJS 3.7.0
  - **依赖库**：MidnightLib 1.9.3
- 新增配置文件：C2ME、ModernFix、Ferrite Core、CullLeaves、Sodium Extra、NewVisualKeybing、Mouse Tweaks、AppleSkin、JER、JEED、JER Integration、Xaero 系列、Chunky、spark、MidnightLib 等模组配置
- 设计文档更新：
  - 更新 `README.md` 系统地图，添加 20 个新组件条目
  - 更新性能预算说明，完整覆盖渲染/HUD/逻辑/区块/光照/内存/树叶剔除维度
  - 更新脚本依赖链，纳入 KubeJS Data Component 与 LootJS
  - 创建 20 个组件文档：`c2me.md`、`modernfix.md`、`ferritecore.md`、`cullleaves.md`、`sodium-extra.md`、`scalablelux.md`、`newvisualkeybing.md`、`mousetweaks.md`、`appleskin.md`、`jeresources.md`、`jeed.md`、`xaerominimap.md`、`xaeroworldmap.md`、`chunky.md`、`spark.md`、`jadeaddons.md`、`jerintegration.md`、`kubejs-datacomponent.md`、`lootjs.md`、`midnightlib.md`
- 设计影响：
  - 性能优化矩阵已完整，覆盖渲染、逻辑、区块、光照、内存与客户端剔除
  - QoL 信息查询体系建立（JEI + JER + JEED + Jade），为后续内容模组提供信息展示基础
  - 导航与运维工具就位（Xaero 地图、Chunky、spark），支撑长期服务器运营
  - KubeJS 魔改生态扩展至 DataComponent 与战利品表，为阶段化内容与平衡调整提供基础设施
  - 多个集成模组（Jade Addons、JER Integration）作为前向兼容钩子，为未来的 Create、Thermal、Tinkers' 等内容模组预留集成点
- 验证状态：已扫描整合包，所有新增模组元数据与配置文件已记录；实际兼容性、性能测试与多人验证尚待完成。
- 剩余问题：
  - C2ME 与 ScalableLux 为 alpha 版本，需密切关注稳定性更新
  - Xaero 地图缓存与 HUD 布局需在实际多人环境中验证
  - KubeJS Data Component 与 LootJS 的脚本 API 覆盖度需在后续魔改开发中验证
  - 前向兼容的集成模组（Jade Addons、JER Integration）在目标内容模组未安装时处于空窗期，需向玩家/运营者说明

## 2026-07-15 - 加载首批基础模组与魔改框架

- 新增模组 **10 个**：
  - **性能渲染**：Sodium 0.8.12、Lithium 0.15.4、ImmediatelyFast 1.6.11
  - **着色器与 UI**：Iris 1.8.14-beta.1、ModernUI 3.13.0.1
  - **QoL 工具**：JEI 19.38.0.366、Jade 15.10.5
  - **魔改框架**：KubeJS 2101.7.2-build.368、KubeJS Additions 1.21.1-6.0.0、Rhino 2101.2.7-build.85
- 新增脚本内容：KubeJS 默认目录结构（`startup_scripts/`、`server_scripts/`、`client_scripts/`、`assets/`、`config/`）
- 新增配置文件：各模组的默认配置文件共 30 项（详见 `current-inventory.md`）
- 设计文档更新：
  - 更新 `README.md` 系统地图，添加 10 个组件条目
  - 更新设计支柱为"性能优先、可扩展性、UI 一致性"
  - 更新跨系统约束（性能预算、着色器兼容性、脚本依赖链）
  - 创建 10 个组件文档：`sodium.md`、`lithium.md`、`immediatelyfast.md`、`iris.md`、`modernui.md`、`jei.md`、`jade.md`、`kubejs.md`、`kubejsadditions.md`、`rhino.md`
- 设计影响：
  - 性能基线已建立（Sodium + Lithium + ImmediatelyFast），后续内容模组需在此基线上评估启动与内存影响
  - 魔改基础设施就位（KubeJS + Rhino + Additions），后续所有内容魔改均通过脚本系统实现
  - 着色器支持已启用（Iris），视觉风格可通过着色器包统一调整
- 验证状态：已扫描整合包，所有模组元数据与配置文件已记录；客户端成功启动及实际性能测试尚待验证。
- 剩余问题：
  - 需确认首批模组在目标硬件上的启动耗时与内存占用
  - Iris beta 版本稳定性待观察
  - 着色器包选择尚未确定
  - KubeJS 脚本尚未编写，魔改能力仅停留在框架层面

## 2026-07-15 - 完成长线运营整合包方案调研

- 新增：`docs/design/research-report-v1.md`，涵盖 1.21.1 NeoForge 生态全面调研。
- 魔改框架选型：**KubeJS 7.0** 作为主力魔改引擎，**LootJS**、**KubeJS Additions**、**KubeJS Data Component** 作为核心 addon。
- 阶段系统选型：**Chapters** 作为 GameStages 的现代继任者，支持 item/fluid/chemical/recipe/mod 级别锁定，原生支持 KubeJS、FTB Teams/Quests、JEI。
- FTB 生态确认：FTB Library、FTB Teams、FTB Quests、FTB Chunks、FTB Quests Optimizer 均支持 1.21.1 NeoForge。
- 版本管理：确认 **VersionerReborn** 可用于整合包版本检查与更新通知。
- 内容模组生态：梳理了科技线（Create/Mekanism/AE2 等）、魔法线（Ars Nouveau/Iron's Spells/Occultism 等）、冒险线（Ice and Fire/Cataclysm/Aether 等）的可用性与投放建议。
- 设计支柱更新：确立了"长线运营优先、Vanilla+ 起步阶段式解锁、魔改即基础设施、服务端客户端同源"四大支柱。
- 开放问题更新：补充了第一版模组清单确认、特定模组可用性待核实等项。
- 验证状态：调研基于 CurseForge/Modrinth/KubeJS Wiki/MC百科 等公开信息，实际模组兼容性待本地测试。

## 2026-07-15 - 添加 Git 仓库管理规则

## 2026-07-15 - 添加 Git 仓库管理规则

- 新增：`.gitignore` 文件，定义整合包仓库的忽略规则。
- 忽略范围：运行时日志、下载缓存、玩家存档、本地库文件（`.dll`）、PCL 启动器个人配置、游戏主 Jar、系统临时文件等。
- 保留范围：`config/`、`defaultconfigs/`、`mods/`、`resourcepacks/`、`docs/`、`Toudai.json` 及设计文档。
- 设计影响：统一团队与 CI 的仓库边界，避免个人运行时数据混入版本控制。
- 验证状态：已扫描现有目录结构，规则与当前文件布局匹配。

## 2026-07-14 - 建立设计文档与运行基线

- 新增：整合包设计文档、组件文档和自动生成的内容清单。
- 已识别：Minecraft 1.21.1、NeoForge 21.1.235、FML 4.0.42、Java 21。
- 设计影响：后续内容必须以该运行平台为兼容性基线；当前尚无玩法模组或资源内容。
- 验证状态：本地元数据与配置文件已检查，客户端成功启动尚待验证。
- 剩余问题：核心主题、目标玩家、服务端范围和性能目标尚未定义。

## 2026-07-30 - 料理统一 v8：孤立食材桥接与死配方修复（静态）

- 新增：`NAME-04` 小龙虾家具 18 个食物中文名覆盖（`kubejs/client_scripts/unify/food_names.js`），区分度避让 NAME-02 已占用名。
- 新增：`FURNITURE-BRIDGE-01` 标签桥接（海盐→`c:salt`、鲜奶酪→`c:cheese`、双果酱→`c:jams`）与 4 条同 ID 配方覆盖（家具面团/双披萨/奶酪三明治接入 `seki:flours/plain_wheat`、`seki:doughs/flatbread`、`c:cheese`）。
- 修复：`DEAD-FIX-01` 两条运行时死配方——immortalers 马芬引用不存在的 `c:foods/egg` 改为 `c:eggs`；saraddons 椒盐卷饼面团引用不存在的 `c:wheat_dough` 改为 `seki:doughs/leavened_savory`。
- 证据：家具 `cutting_board_combining` serializer 常量池证实 vanilla `Ingredient` 解码（支持 tag）；saraddons JAR 原方与同族 F&C stove/pretzel 比对。
- 验证状态：`validate.py` 双目标 NEW ERROR 0；10 条模组原生压缩循环登记入校验基线。运行时 `/reload` + JEI + 实机验收待进行。
- 剩余问题：烘焙坊 blender 容器返还语义（P0-3）未实机证实；设计清单 408+40+1 待接受变更（46 个新模组及配置）阻塞安全提交，待设计文档接受流程处理。
## 2026-07-30 - 料理统一 v8 运行时验收通过

- 验证：KubeJS 日志 0 错误 0 警告；`c:salt`/`c:cheese`/`c:jams` 标签桥接、2 条死配方修复、4 条家具同 ID 覆盖在 02:35 导出的最终态 SQLite 中全部生效；配方总数 9815 无净增。
- 回归：v6/v7 抽查 8/8 通过，无回退。
- 剩余问题：blender 容器返还语义（P0-3）与实机交互项维持开放；设计文档债待单独立项。

## 2026-08-26 - 料理统一 v12：全面收敛（运行时审计驱动，Delightify-level 全自动审查）

- 事实源切换：今日 08:06Z 的 `dl-exporter/export.sqlite` 运行时最终态（234 模组 / 10079 物品 / 11909 配方 / 22866 标签）。先核对了 v6–v11 全部既有裁决：盖饭 9 条 pot carrier 路径、点心链、抄手汤锅、面团/面粉窄标签、seki 切割桥均 PRESENT，旧越级 ID 全部 ABSENT，无回退。
- 新增标签桥接（`TAG-BRIDGE-04`，10 个静态 tag 文件，`kubejs/data/`）：
  - `c:eggs`：实测 alexscaves 恐龙蛋在脚本 remove 后仍被其数据包重新并入；改静态 `replace:true` 仅保留 minecraft 三蛋 + `bakeries:whole_egg`（恐龙蛋彻底退出通用蛋链）。
  - `c:grain/rice`：补 `farmersdelight:rice`，KC 汤锅米饭族（10 条）现可用 FD 稻米。
  - `c:salts`：补 `refurbished_furniture:sea_salt`，meadow 厨锅 13 条 + ratatouille 5 条配方可用海盐。
  - 新建 `c:crops/grape`、`c:grapes/red`、`c:grapes/white`、`c:crops/hops`（调查 A7/A10 落地）。
- 非料理 side 批次（`SIDE-DEADFIX-01`）：补 `c:gravel`、`c:dusts/sulfur`、`alexscaves:cave_paintings` 三标签，复活 12 条死配方（alexscaves 硫磺粉/金属屑、supplementaries 肥皂洗壁画）。
- 译名收敛（`NAME-07`，42 条）：培根 NAME-06 碰撞修复（f&c→鲜培根）、甜椒/生菜种子、野生紫胡萝卜、颗粒狗粮、烤全鸡、华夫饼/煎饼、肉桂苹果派、鲜榨西瓜汁、冰茶、山葡萄家族×6、幽酿花、龙息乌龙茶、研磨可可粉、紫颂花浓茶/龙蛋卡仕达/龙蛋壳碎片、末地石炉、手摇石磨、月饼块、六色冰箱、梅森罐三件、井盐桶、粗盐块、发酵全麦面团、模具奶酪可可吐司、观赏螃蟹桶/蛋、黄瓜箱×3、紫颂果板条箱。
- 验证状态：静态全绿——数据 JSON 全量解析通过；`node --check` 两个脚本通过；42 条译名加入后最终译名表零新增碰撞。
- 剩余开放：运行时 `/reload` + JEI 验收（见 charter §9 清单）；blender 容器返还语义（P0-3）仍维持开放；v9–v11 批次此前未在 changelog 留痕，属文档债，本次 charter 已补 v9+ 语义登记引用，v9–v11 的正式条目待后续归档。
