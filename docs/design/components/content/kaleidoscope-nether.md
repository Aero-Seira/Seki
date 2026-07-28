# 森罗物语：下界（Kaleidoscope Nether）

## 记录

- 类型：mod
- 状态：active
- 证据可信度：verified
- 来源路径：`mods/[森罗物语：下界] kaleidoscope_nether-1.1.4-neoforge+mc1.21.1.jar`
- 标识与版本：mod_id = `kaleidoscope_nether`；版本 `1.1.4`
- 加载器或包格式：NeoForge 21.1.235（Minecraft 1.21.1）

## 设计作用

森罗物语的**下界主题内容扩展**（inferred，命名；mods.toml 描述为占位文本 "Example mod description"，verified 元数据缺失）。将系列的料理/装饰内容延伸至下界维度素材。

## 集成关系

- 同系列厨房本体（inferred）；与次元酒（dim_wine）的下界酒品可能存在素材联动（unknown）。

## 配置意图

- **`config/kaleidoscope_nether-common.toml`**：默认生成（verified），未做有意改动。

## 兼容性与性能

- 新增注册表内容；若涉及下界世界生成，移除风险更高，须在章节锁定中明确。

## 验证

- [ ] 启动测试
- [ ] 内容面实机盘点（是否含世界生成）

## 风险与开放问题

1. 官方描述缺失，是否修改下界世界生成 unknown——这直接决定存档兼容性结论，需优先核实。

## 历史

- 2026-07-21 后: 随料理章节加入（本批归档）
