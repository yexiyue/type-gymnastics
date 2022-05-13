/**
 * 如果继续嵌套Promise可以通过递归解出
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : never
