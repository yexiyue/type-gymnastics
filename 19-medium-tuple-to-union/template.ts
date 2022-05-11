//第一种方法
/* type TupleToUnion <T extends any[]>=T[number] */

//第二种,关键在于要的是键名的类型
/* type TupleToUnion<T extends any[]>=keyof {
  [P in T[number]]:P
} */

//第三种,类型推断不能一下直接取出，得递归才行
/* type TupleToUnion<T extends any[]> = T extends [infer F, ...infer R]
  ? F | TupleToUnion<R>
  : never
 */

//第四种
//type TupleToUnion<T extends any[]>=T extends (infer R)[]?R:never
type TupleToUnion<T extends any[]>=T extends Array<infer R>?R:never