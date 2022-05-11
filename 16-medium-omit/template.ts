//第一种实现，不是很能理解as
type MyOmit<T,K extends keyof T>={
  [P in keyof T as P extends K ?never:P]:T[P]
}
//第二种实现
/* type MyExclude1<T,U>=T extends U?never:T

type MyOmit<T,K extends keyof T>={
  [P in MyExclude1<keyof T,K>]:T[P]
} */

//错误实现
/* type MyOmit<T,K extends keyof T>={
  [P in keyof T ]: P extends K?never:T[P]
}
 */