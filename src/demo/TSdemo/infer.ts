type demoString = ['a', 'b', 'c']
type demoNumber = [1, 2, 3, 4, 5]
type keyType = 'A' | 'B' | 2
//如果是数组类型就返回数组元素的类型，否则返回原类型
type inferArr<T> = T extends Array<infer U> ? U : T
type A = inferArr<(string | number)[]>
type partial = Partial<demoString> //改成可选属性
type pick = Pick<demoString, '0'> //通过下标获取值
type readonly = Readonly<demoString> //改成只读属性
type record = Record<keyType, demoNumber> //第一个参数约束键类型，第二个参数约束传入对象的类型
export type inferDemo<T extends any[]> = T extends [infer a, infer b, infer c]
  ? a
  : [] // 只获取设置的值

export type reverArr<T extends any[]> = T extends [infer First, ...infer rest]
  ? [...reverArr<rest>, First] 
  : T //递归取反
type a = inferDemo<demoString>
type b = reverArr<demoNumber>
const c: record = {
  2: [1, 2, 3, 4, 5],
  A: [1, 2, 3, 4, 5],
  B: [1, 2, 3, 4, 5]
}
const a: a = 'a'
const b: b = [5, 4, 3, 2, 1]
