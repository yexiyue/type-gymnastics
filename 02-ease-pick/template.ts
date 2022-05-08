//这道题有手就行

type MyPick<T, K extends keyof T> = {
  [P in K]:T[P]
}
