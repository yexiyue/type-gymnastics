//先写个判断类型是否相等的函数
type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

/**
 * 通过infer推断和递归，每次判断剩余的第一个元素
 */
type Includes<T extends any[], K> = T extends [infer P, ...infer Rest]
  ? IsEqual<K, P> extends true
    ? true
    : Includes<Rest, K>
  : false
