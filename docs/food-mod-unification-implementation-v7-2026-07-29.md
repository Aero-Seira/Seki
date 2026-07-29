# Seki 料理体系统一 v7：面团语义与机器互操作

> 日期：2026-07-29  
> 状态：**静态实施完成，运行时待验收**  
> 事实源：`mpide-exporter/export.sqlite`（9811 配方 / 211 模组，导出于 2026-07-29T12:48:00.993361400Z）+ 新鲜 JAR/KubeJS 静态索引 + 目标配方原始 JSON。

## 问题证据

1. `kaleidoscope_cookery:chopping_board/raw_noodles_from_raw_dough` 的最终态原料为 `#c:dough`，不是精确的森罗死面团。
2. `c:dough` 汇入 `#c:doughs`，而 Bakeries 将甜面团、咸面团和全麦面团同时加入 `c:doughs`；因此甜面团能匹配普通面条配方。
3. 同一污染同时影响 `someassemblyrequired:cutting/create/dough`、生汉堡胚、肉夹馍与驴肉火烧等咸食路径。
4. F&C 调理碗与 Bakeries 搅拌机的普通面团配方精确锁定本模组面粉；包内已有多种现实语义等价的小麦面粉，却无法互换。
5. Bakeries 四条旧 `compat/create/*_dough` 路径使用瓶装酵母但不返回玻璃瓶；新版 `integration/create/mixing/*` 结构可表达返瓶。
6. `c:flours/wheat` 并非“普通小麦粉”标签：当前同时包含 `create:wheat_flour` 与 `bakeries:whole_wheat_flour`，使普通粉能变全麦面团、全麦粉能变 Create 普通面团。
7. 新 SQLite 证明首版 `seki:doughs/noodle` 仍有产物身份错误：森罗死面团在 FD 砧板、Create 切制或 F&C 绞肉机中会分别变成鸡蛋生意面或农家意面，输出由机器 namespace 而非面团成分决定。
8. 同一横向模式存在于首版 `seki:doughs/savory`：清水死面团和鸡蛋面团均可直接制作肉夹馍、生汉堡胚与驴肉火烧，发酵、含蛋和无酵母面团的成型用途再次混为一谈。

## 裁决

| 标签 | 用途 | 成员数 | 排除重点 |
| --- | --- | ---: | --- |
| `seki:flours/plain_wheat` | 普通小麦粉互换 | 5 | 全麦粉、米粉与特殊粉 |
| `seki:flours/whole_wheat` | 全麦粉专用 | 1 | 所有普通精制小麦粉 |
| `seki:doughs/plain_noodle` | 清水生面条 | 3 | 鸡蛋/蛋黄、酵母与甜面团 |
| `seki:doughs/egg_pasta` | 鸡蛋生意面 | 2 | 清水、酵母与甜面团 |
| `seki:doughs/flatbread` | 无酵母火烧/薄饼胚 | 3 | 鸡蛋、发酵与甜面团 |
| `seki:doughs/leavened_savory` | 咸味发酵面包胚 | 3 | 清水、鸡蛋与甜面团 |

不修改全局 `c:dough`/`c:doughs` 的第三方定义，避免破坏未知配方；只在已确认用途的目标配方中换用窄标签。

## 实施范围

### 制面路径

- `plain_noodle`：森罗死面团、Create 机制面团、家具模组面团；在森罗切菜板、FD 砧板、Create 切制和 F&C 石磨绞肉机中都产出 2 个 `kaleidoscope_cookery:raw_noodles`。
- `egg_pasta`：FD 整蛋面团与 Ratatouille 海盐蛋黄面团；在森罗切菜板、FD 砧板和 Create 切制中产出 `farmersdelight:raw_pasta`，在 F&C 石磨绞肉机中产出 2 个 `farm_and_charm:raw_pasta`。
- F&C 普通面团实际消费酵母，中文名修订为“农家发酵面团”，不再进入任何制面标签。
- 输出中文名同步区分为“清水生面条”“鸡蛋生意面”“石磨鸡蛋生意面”，明确呈现原料与加工形态。

两组标签成员互斥；机器负责加工方式，面团谱系负责产物身份。所有甜面团及其他发酵面团均不可制面。

### 咸食路径

- 森罗驴肉火烧的标准锅与 flex 锅使用 `seki:doughs/flatbread`，接受三种无蛋、无酵母普通面团。
- 森罗下界肉夹馍 1/2/3 份计数族与 Some Assembly Required 生汉堡胚使用 `seki:doughs/leavened_savory`，接受 F&C 发酵面团及 Bakeries 咸味/全麦发酵面团。
- 两组均拒绝鸡蛋意面团与三种甜面团；死面团不再能直接变成发酵汉堡胚。

### 面团生产机器

- F&C 调理碗：普通面团、甜面团、蛋糕糊 3 条。
- letsdocompat Create 对应路径：普通面团、甜面团、蛋糕糊 3 条。
- Bakeries blender：咸面团、甜面团、可可面团 3 条。
- Bakeries Create integration：咸面团、甜面团、可可面团 3 条。

普通面粉输入统一为 `seki:flours/plain_wheat`。F&C 普通和面的酵母输入改为 `c:yeast`；Bakeries `bottle_yeast` 保持精确 ID，不破坏其玻璃瓶容器语义。

### 普通粉与全麦粉守恒

- Create 普通面团的搅拌、冲洗与工作台三条同 ID 路径改用 `seki:flours/plain_wheat`。
- Bakeries 全麦面团的 blender 与 Create integration 两条同 ID 路径改用 `seki:flours/whole_wheat`。
- 不直接改写第三方 `c:flours/wheat`，避免影响未知用途；只在结果明确区分普通/全麦的五条路径中收紧使用面。

## 移除与容器守恒

精确移除以下四条旧路径：

- `bakeries:compat/create/cocoa_dough`
- `bakeries:compat/create/salted_dough`
- `bakeries:compat/create/sweet_dough`
- `bakeries:compat/create/whole_wheat_dough`

可可面团补建 `bakeries:integration/create/mixing/cocoa_dough`；咸面团、甜面团与全麦面团沿用 integration 路径。所有这些 Create 路径都返回 `minecraft:glass_bottle`。

## 静态验证

- KubeJS 数据 JSON 全量解析：通过。
- 新鲜静态索引：169 个 JAR；配方与标签已包含本批覆盖。
- `validate.py`：server scripts 与 data 均为 `NEW ERROR 0`。
- data WARN 只剩 v6 动态脚本产物的已知静态不可见项；本批六个 `seki:` 标签已改为数据包标签并可由索引直接解析。
- `removes.txt` 中四条 Bakeries 旧路径均命中 JAR 索引。
- 工作区捆绑 Node.js 已对 8 个 KubeJS JavaScript 文件执行 `--check`：全部通过；KubeJS `/reload` 仍负责运行时 API 与 serializer 验收。
- 最终静态回归同时将 v6 的四条四川抄手/云吞面动态汤锅配方迁移为静态数据配方，修复 KubeJS component 桥静默丢失 carrier、汤底、纹理、颜色与时间字段的问题。

## 运行时验收清单

1. 执行 `/reload`，确认 `logs/kubejs/server.log` 无新增 ERROR/WARN。
2. JEI 检查三种甜面团均不能生成 `kaleidoscope_cookery:raw_noodles`、两种 `raw_pasta`、肉夹馍、驴肉火烧和生汉堡胚。
3. 分别用五种普通小麦粉测试 F&C 调理碗、Bakeries blender 与 Create mixing 的对应面团路径。
4. 用 `farm_and_charm:yeast` 与 `saraddons:yeast` 分别测试 F&C 普通和面；确认瓶装酵母不能被当作普通干酵母吞入。
5. 实做 Bakeries Create 可可/咸/甜/全麦面团，确认每次返还玻璃瓶。
6. 重新导出 SQLite，核对四条旧 compat ID 消失、目标同 ID 覆盖使用窄标签、可可 integration 路径存在且结果含玻璃瓶。
7. 核对四条 `seki:{flex_stockpot,stockpot}/{sichuan_wonton,wonton_noodles}` 均保留碗、正确汤底、纹理、颜色和 300 tick 时间字段。
8. 用全麦粉尝试 Create 普通和面并确认失败；用五种普通面粉尝试 Bakeries 全麦和面并确认失败；对应正确面粉路径应成功。
9. 分别把死面团、Create 面团和家具面团送入四种制面机器，确认只输出清水生面条；把 FD 鸡蛋面团和 Ratatouille 蛋黄面团送入四种机器，确认只输出两类鸡蛋意面；F&C 发酵面团应无制面配方。
10. 确认驴肉火烧只接受 `flatbread` 三成员；肉夹馍与生汉堡胚只接受 `leavened_savory` 三成员；鸡蛋面团与甜面团均不得进入这六条路径。
