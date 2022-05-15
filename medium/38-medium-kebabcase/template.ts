type KebabCase<T extends string> = T extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${R extends Uncapitalize<R> ? '' : '-'}${KebabCase<R>}`
  : T
