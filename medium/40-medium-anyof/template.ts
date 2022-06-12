type False = false | 0 | '' | [] | Record<string, never>

type AnyOf<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends False
    ? AnyOf<R>
    : true
  : false
