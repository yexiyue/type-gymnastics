//轻轻松松直接拿捏
type MyReadonly<T> = {
  readonly [P in keyof T]:T[P]
}