//第一种，常用做法
/* type First<T extends any[]>=T extends []? never :T[0] */

//第二种判断length属性,如果为0返回never否则返回第一个元素的类型
/* type First<T extends any[]>=T['length']extends 0?never:T[0] */

//第三种,如果第一个元素的类型在联合类型里返回第一个元素的类型，否则返回never
/* type First<T extends any[]>=T[0] extends T[number]?T[0]:never */

//第四种,通过类型推断，如果第一个元素存在则P=第一个元素的类型
type First<T extends any[]>=T extends [infer P,...infer Rest] ?P:never