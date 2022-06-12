type Diff<A extends object, B extends object> = {
  [P in keyof (A & B) as P extends keyof (A | B) ? never : P]: P extends keyof A
    ? A[P]
    : P extends keyof B
    ? B[P]
    : never
}
