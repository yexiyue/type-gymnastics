type trim1=' '| '\n'|'\t'
type Trim<T extends string>=T extends `${trim1}${infer R}` | `${infer R}${trim1}`?Trim<R>:T