//先递归成数组在返回数组长度
type LengthOfString<
  T extends string,
  P extends string[]=[]
>=T extends `${infer F}${infer R}`
  ?LengthOfString<R,[...P,F]>
  :P['length']