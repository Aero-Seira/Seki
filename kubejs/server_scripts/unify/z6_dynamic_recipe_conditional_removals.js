// CUISINE-DYNAMIC-REMOVAL-06（v14）：对「运行期生成」的烹饪配方改用按类型/前缀的条件删除。
// 依据（2026-08-28T05:55Z 快照）：letsdocompat 在 jar 内 0 个配方文件却有 248 条运行时配方；
// kaleidoscope_cookery:flex_pot(41) + flex_stockpot(42) 同样没有任何数据包文件。这类配方在 KubeJS 配方事件之外注册，
// 按 id 删除不保证命中——v13 台账里的 flex 红米肠卷、flex 冒菜、双前缀洋葱汤就是这样活下来的。
// 因此：源头开关（config）是第一手段，本文件是第二道保险。
// 安全性：83 条 flex 配方的产物全部另有至少一条标准器具路线（快照校验 flex_only = 0），删除不会断任何物品的获取链。

ServerEvents.recipes(event => {
  // 国味/万花筒「模糊烹饪」旁路：同一道菜不得同时有 pot/stockpot 与 flex_pot/flex_stockpot 两条输入宽度不同的锅路线。
  event.remove({ type: 'kaleidoscope_cookery:flex_pot' })
  event.remove({ type: 'kaleidoscope_cookery:flex_stockpot' })
  // letsdocompat 的双前缀二次兼容层：farm_and_charm/farm_and_charm/... 是同一道菜的第二条泛化路线。
  event.remove({ id: /^letsdocompat:farm_and_charm\/farm_and_charm\// })
})
