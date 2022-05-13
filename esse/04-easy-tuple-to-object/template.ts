/* type TupleToObject<T extends readonly any[]> = {
  [P in T[any]]:P
} */

//两种方式都可以，因为数组是特殊的对象，数字索引类型，
//所以索引查询里面用number或者any都可以，且any类型兼容number

type TupleToObject<T extends readonly any[]>={
  [P in T[number]]:P
}