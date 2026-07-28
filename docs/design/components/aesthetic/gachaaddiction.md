# GachaAddiction

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/gachaaddiction-1.1.3.1.jar`
- 标识与版本：mod_id = `gachaaddiction`；版本 `1.1.3.1`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

**开箱抽奖演出**模组（verified，mods.toml："Every time you open a chest, it's a gacha pull."）：开启箱子等容器时播放转盘抽奖动画与稀有度光效，把战利品获取包装成"抽卡"体验。与 Loot Beams、RarityCore 构成战利品反馈强化线，服务服务器的奖励演出与运营活动氛围。

## 玩家可见行为

- 开容器触发转盘动画、稀有度闪光与音效；FTB 任务奖励也会触发抽奖界面（`ftb_quests_gachaa = true`，verified 配置默认值）。

## 配置意图

- **`config/gachaaddiction-client.toml`**（verified，新增，默认确认）：
  - `whitelist/blacklist_filter_list = []`：黑白名单均空，即全部容器战利品触发演出——后续若演出过于频繁，收敛开关在此；
  - `merge_item = true`、`rarity_sorting = true`：奖励合并展示并按稀有度排序；
  - `reward_sound_effects(_optimize) = true`：播放且只播最高稀有度音效。

## 集成关系

- 依赖 RarityCore 稀有度数据做排序/光效（inferred）；与 FTB Quests 有可选联动（当前包未装 FTB Quests，verified）。

## 兼容性与性能

- 客户端演出层，无存档影响；动画频率过高会产生感知疲劳，需实机评估。

## 验证

- [ ] 启动测试
- [ ] 开箱演出观感与频率评估

## 历史

- 2026-07-28: 随战利品反馈强化批次加入（本批归档）
