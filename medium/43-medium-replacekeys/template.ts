/* type ReplaceKeys<U extends Record<string,any>,T,Y>=U extends any ? (
  {
    [K in keyof U]:
    K extends T ? (
      Y[keyof Y & K]
    ) : U[K]
  }
) : never */

//方法一
/* type ReplaceKeys<U extends Record<string,any>, T, Y> ={
  [K in keyof U]:K extends T
  ?K extends keyof Y
    ?Y[K]
    :never
  :U[K]
}  */

//方法二
//第三行运用交叉类型对基本类型是求交集找到Y和U的公共字段再用Y替换
type ReplaceKeys<U,T,Y>={
  [K in keyof U]:K extends T
  ?Y[keyof Y & K]
  :U[K]
}