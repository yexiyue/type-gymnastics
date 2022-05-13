type trim=' '|'\n'|'\t'
type TrimLeft<T extends string>=T extends `${trim}${infer R}`?TrimLeft<R>:T