type Replace<
  T extends string,
  K extends string,
  P extends string
> = T extends `${infer F}${K}${infer B}`
  ? K extends ''
    ? T
    : `${F}${P}${B}`
  : T
