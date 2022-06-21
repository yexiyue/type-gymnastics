//这么做没效果
//我们要做的是消除索引签名，就是键值不能是number|string|symbol,可以是数字，字符串字面量类型
/* type RemoveIndexSignature<T> = {
  [P in keyof T as P extends string?never:P extends number?never:P extends symbol?never:P] :T[P]
} */

//第一种
/* type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
    ? never
    : symbol extends P
    ? never
    : P]: T[P]
} */
//第二种
//利用类型推断，检测是否有具体的键
type RemoveIndexSignature<T>={
  [P in keyof T as P extends `${infer key}`?P:never ]:T[P]
}