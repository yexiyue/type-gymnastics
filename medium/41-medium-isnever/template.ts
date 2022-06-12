//type IsNever<T>=[T] extends [never]?true:false
type IsNever<T>={T:T} extends Record<string,never>?true:false