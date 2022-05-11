//使用交叉类型表示把两个集合求并集

type MyReadonly2<T ,K extends keyof T =keyof T>={
  readonly [P in K]:T[P]
}&{
  [P in keyof T as P extends K?never:P]:T[P]
}