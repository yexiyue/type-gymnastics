type StringToUnion<T extends string> = T extends `${infer P}${infer R}`
  ? P | StringToUnion<R>
  : never
