//第一种，不理解
// if T is union type, it must can be distributive conditional type
// and must be naked type, eg: T extends never or T extends S
// type IsUnion<T, S = T> = T extends never ? false : [S] extends [T] ? false : true;
type IsUnion<T, F = T> = T extends F ? ([F] extends [T] ? false : true) : true
