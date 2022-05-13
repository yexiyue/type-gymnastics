type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = T extends `${ infer P}${From}${infer B}`
  ? From extends ''
    ?T
    :`${ReplaceAll<P,From,To>}${To}${ReplaceAll<B,From,To>}`
  :T
