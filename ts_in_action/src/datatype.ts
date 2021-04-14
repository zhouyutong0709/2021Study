// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let src: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 元组
let tuple: [number,string] = [0, '1']

// 函数
let add = (x:number, y:number) => x + y

// 对象
// let obj: object = {x: 1, y: 2}
// obj.x = 3 // 这种操作是不允许的，
let obj: {x: number, y:number} = {x: 1, y: 2}
obj.x = 3 

// symble
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined.null      
let un: undefined = undefined
let nu: null = null
num = undefined // "strictNullChecks": false,可以这样赋值
num = null   

// void
let noReturn = () => {}

// any
let x
x = 1
x= []
x = () => {}

// never
// 表示永远不会有返回值类型
let error = () => {
  throw new Error('error')
}

// 死循环函数
let endless = () =>{
  while(true) {}
}

// (function () {
//   var undefined = 0
//   console.log(undefined)
// })() // 自自行