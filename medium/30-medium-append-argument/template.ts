type AppendArgument<T extends (...arg: any[]) => any, A> = T extends (
  ...args: infer R
) => infer P
  ? (...args: [...R, A]) => P
  : never
