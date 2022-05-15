/* type Merge<T, U> = {
  [P in keyof T | keyof U]: P extends keyof T
    ? P extends keyof U
      ? U[P]
      : T[P]
    : P extends keyof U
    ? U[P]
    : never
} */
type Merge<T extends Record<any,any>, U extends Record<any,any>> = {
  [P in keyof T|keyof U]:P extends keyof U?U[P]:T[P]
}