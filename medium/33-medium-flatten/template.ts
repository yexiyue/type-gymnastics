type Flatten<T extends any[], P extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends any[]
    ? Flatten<[...F, ...R],P>
    : Flatten<R, [...P, F]>
  : P
