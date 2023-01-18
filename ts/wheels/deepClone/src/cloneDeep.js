// 序列化与反序列化 JSON只支持 基本类型 和 对象 数组 null 
// 缺点：
// 1. 不支持函数 
// 2. 不支持undefined 
// 3. 不支持引用 
// 4. 不支持json不支持的类型
const cloneDeep = (data) => JSON.parse(JSON.stringify(data))

// const a1 = {
//   name: 1,
//   say: () => '2'
// }
// console.log(cloneDeep(a1)) //{ name: 1 }

// const a2 = {
//   name: 1,
//   age: undefined
// }
// console.log(cloneDeep(a2)) //{ name: 1 }

// const a3 = {
//   name: 1,
// }
// a3.a = a3
// console.log(cloneDeep(a3)) // TypeError: Converting circular structure to JSON

const a4 = {
  name: 1,
  age: new Date()
}
console.log(cloneDeep(a4)) // { name: 1, age: '2023-01-17T02:23:53.259Z' }

