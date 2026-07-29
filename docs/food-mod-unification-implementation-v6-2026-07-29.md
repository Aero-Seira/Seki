# Seki 料理体系统一 v6 实施记录

> 日期：2026-07-29  
> 状态：**静态实施完成，运行时待验收**  
> 事实源：`mpide-exporter/export.sqlite`（9806 配方 / 211 模组）+ 新建静态索引（169 JAR / 8653 配方）+ 目标 JAR 原始 JSON。

## 已实施范围

| 批次 | 实施结果 |
| --- | --- |
| NAME-02 | 189 个已注册物品/方块的简体中文名称覆盖；全部目标 ID 经 `index/items.tsv` 校验存在 |
| TAG-02 | 盐、面粉、通用面团、牛肉馅、酵母、生菜、番茄公共标签桥接 |
| FIX-02 | 从 `c:eggs` 移除熟煎蛋与海龟蛋；从 `c:crops/tomato` 移除烂番茄 |
| DIMSUM-01R~05 | 鲜肉馅 repurposing，死面皮/薄皮/发面链/专属生坯注册，包子、饺子、生煎、肉饼、四川抄手、云吞面与烤包子迁移 |
| STEAM-01 | 两种馒头必须从共享生馒头蒸制；幻想乡肉包改用发面皮 |
| BAKE-01R | 长棍、辫子面包、可颂改吃 `bakeries:salted_dough`；苹果派改吃 `farmersdelight:pie_crust` |

## 主要文件

- `kubejs/startup_scripts/unify/food_items.js`：注册 11 个中间物与生坯。
- `kubejs/client_scripts/unify/food_names.js`：现实语义中文名覆盖。
- `kubejs/server_scripts/unify/food_tags.js`：公共标签桥接与标签除污。
- `kubejs/server_scripts/unify/food_recipes.js`：旧路径精确移除与可由 KubeJS 稳定表达的新配方路径。
- `kubejs/data/kaleidoscope_cookery/recipe/{pot,stockpot}/`：27 条饺子、生煎与肉饼的 1~9 份同 ID 覆盖，保留原生无盛具语义。
- `kubejs/data/seki/recipe/{flex_stockpot,stockpot}/`：4 条四川抄手/云吞面静态配方，完整保留碗、汤底、纹理、颜色与时间字段。
- `kubejs/data/farm_and_charm/recipe/stove/*.json`：4 条同 ID 烘焙覆盖。
- `kubejs/assets/seki/models/item/*.json`：11 个自定义物品模型，复用已安装模组的现有纹理。
- `removes.txt`：23 条精确规则（含既有 9 条盖饭规则）；21 条命中静态索引，另 2 条仅存在于国味 JAR 内嵌数据包且已由运行时 SQLite 证实。

## 关键技术裁决

1. `bakeries:fermentation_box` 只有一个 `ingredient` 字段，无法直接表达“死面团 + 酵母”。实施新增 `seki:yeasted_dough`：先在工作台消费死面团与 `#c:yeast`，再送入发酵箱成为 `seki:fermented_dough`。
2. `bakeries:bottle_yeast` 没有加入 `c:yeast`。它在 blender 中是瓶装输入，Create 兼容方还显式产生玻璃瓶；放入普通 ingredient tag 会破坏容器语义。
3. 方案所写 `vintagedelight:salt` 不在当前注册表中，实际存在的是 `vintagedelight:salt_dust`，实施只引用后者。
4. 国味的 `flex_stockpot/sichuan_wonton` 与 `flex_stockpot/wonton_noodles` 位于 JAR 内嵌数据包；静态扫描器未索引，但运行时 SQLite 明确加载，故保留精确移除，并以 `seki:` 静态数据配方恢复专属生云吞路径。
5. F&C stove 四条配方采用同 ID 数据包覆盖，不另建平行 ID，确保原配方被确定性替换。
6. `raw_dough_steamer` 与 `stuffed_dough_food_steamer` 会预装已失效或已 repurpose 的旧原料；前者成为无法熟制的死蒸笼，后者保留万能馅料旁路，故一并精确移除。

## 未凭空实施的旧版候选

- v3 的 `seki:broth_concentrate` 与 `seki:mixed_seasoning` 只有概念性生产方向，没有 v6 的明确消费清单。仅注册会制造孤立死物品，擅自改造汤/烧烤族又会扩大本批范围，因此留到独立 BROTH/SEASONING 批次。
- P2 所列“每个品种至少一条招牌直用配方”需要逐族指定稳定配方 ID；v6 当前批次表未给出完整映射，本轮先完成译名与通用使用面的低风险基础层。

## 静态验证

- 所有 KubeJS JavaScript 经工作区 Node.js `--check`：通过。
- 所有 KubeJS JSON 经 PowerShell JSON 解析：通过。
- 189 个 rename ID：全部存在或由本批 startup script 注册。
- 11 个模型引用纹理：全部在当前已安装 JAR 中存在。
- 配方静态增量校验：server scripts 与 data 均为 `NEW ERROR 0`。
- 已知 10 个 ERROR 为加入 v6 文件前、同一新鲜索引中已存在的全局配方循环；未由本批新增。
- WARN 主要来自校验器不会解析剩余 KubeJS 动态 `event.custom`、startup 注册的 `seki:` 物品及内嵌数据包，已用原始 JSON、运行时 SQLite 与人工 ID 检查补证；四条碗装汤锅路径已迁移为静态数据配方。

## 首轮运行时修正

- 首轮完整启动的 `logs/kubejs/server.log` 报告 `food_recipes.js:191` 语法错误；当前 Rhino 不接受数组字面量中的展开元素。
- 四川抄手与云吞面的两处 `...repeatedItems(...)` 已改为 `concat(...)`，只调整数组构造方式，原料 ID、数量、配方 ID 与 serializer 字段均未改变。
- 修正后 JavaScript/JSON 与配方增量校验再次通过，server scripts 和 data 仍为 `NEW ERROR 0`；仍需下一次启动或 `/reload` 生成的新日志确认运行时错误归零。

## 第二轮运行时修正

- 新 SQLite（导出时间 `2026-07-29T03:49:36Z`）完整性检查通过；其中饺子与生煎覆盖已加载，肉饼 1~9 份路径缺失，与 `server.log` 的 9 条创建失败一致。
- `event.custom` 的 KubeJS recipe component 桥接无法创建“无 carrier”的 `pot`，并会对 `carrier: []` 的 `stockpot` 产生空 ingredient 警告；原模组 serializer 与 SQLite 均确认这些配方本应无盛具。
- 将饺子、生煎与肉饼共 27 条 1~9 份配方改为原 recipe ID 的数据包覆盖；逐字段沿用当前 JAR，只替换专属生坯，并在无盛具的 `stockpot` 覆盖中省略可选 `carrier` 字段。
- 撤销这 27 个原 ID 的脚本删除规则与动态创建逻辑，避免同 ID 覆盖被再次删除，也不通过伪造碗类 carrier 改变玩法。

## 第三轮运行时修正

- 最新 SQLite（导出时间 `2026-07-29T04:13:34Z`）显示四条 `seki:` 四川抄手/云吞面动态配方虽然存在，但 KubeJS recipe component 桥静默丢失了 `carrier`、颜色、纹理、`time`，云吞面还丢失 `soup_base`。
- JAR 原始 stockpot 配方与国味内嵌 fuzzy datapack 的 flex_stockpot 配方均确认完整字段：碗为 carrier，四川抄手使用熔岩汤底，云吞面使用水汤底，时间均为 300 tick。
- 将四条路径迁移到 `kubejs/data/seki/recipe/{flex_stockpot,stockpot}/`，保留原有 `seki:` ID，并逐字段复制对应 JAR 原文，仅把万能馅面食替换为 `seki:raw_wonton`。
- 删除脚本中的 `stockpotRecipe()` helper 与四个动态 `event.custom`；原国味 ID 的精确移除规则继续保留，防止万能 `stuffed_dough_food` 路径回流。

## 运行时验收清单

1. 完整重启客户端/服务端；startup 注册的新物品不能只靠 `/reload` 生效。
2. 执行 `/reload`，检查 `logs/kubejs/` 与 `logs/latest.log` 无脚本、配方或资源错误。
3. JEI 检查：两种馒头只接受 `seki:raw_mantou`；森罗包子只接受 `seki:raw_baozi`；幻想乡肉包装配必须使用发面皮。
4. JEI 检查：饺子/生煎/肉饼的 1~9 份变体分别使用对应生坯；四川抄手与云吞面使用 `seki:raw_wonton`，并在完成后使用碗盛取。
5. JEI 检查：烤包子只有烟熏炉与营火的包子生坯路径，普通熔炉路径消失。
6. JEI 检查：长棍/辫子面包/可颂使用咸面团，苹果派使用 FD 派皮。
7. 抽查盐、面粉、面团、生菜、番茄标签互认；确认熟煎蛋、海龟蛋、烂番茄不再污染原料标签。
8. 重新导出 `mpide-exporter/export.sqlite`，以 `raw_json.type` 和原始字段复核全部 unparsed 自定义机器配方；四条 `seki:` 汤锅路径必须同时保留 `carrier`、`soup_base`、颜色、纹理与 `time`。
