// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型

enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3

let e1: E.a
let e2: E.b
let e3: E.a

let g1: G
let g2: G.a


/*
问题:
  1) 可读性差：很难记住数字的含义
  2) 可维护性差： 硬编码，牵一发动全身

function initByRole(role) {
  if(role === 1 || role === 2) {
    // do sth
  }else if(role === 3 || role === 4) {
    // do sth
  }else if(role ===5) {
    // do sth
  }else {
    // do sth
  }
}
*/  

/*
修改后：

function initByRole(Role) {
  if(Role.Reporter || Role.Developer) {
    // do sth
  }else if(Role.Maintainer || Role.Owner) {
    // do sth
  }else if(Role.Guest) {
    // do sth
  }else {
    // do sth
  }
}
*/ 