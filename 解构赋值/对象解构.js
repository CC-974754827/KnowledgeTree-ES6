/**
 * 对象解构的语法是在赋值对象的左侧使用了对象字面量
 */
// 基本
// 同名变量解构赋值
let {foo1, foo2} = {foo1: 'foo1', foo2: 'foo2'};  // foo1 = 'foo1'  foo2 = 'foo2'
// 不同变量解构赋值
let {foo1: foo2} = {foo1: 'foo1'};  // foo2 = 'foo1'

// 可嵌套可忽略
let {p: [x, {y}]} = {p: ['hello', {y: 'world'}]}; // x = 'hello'  y = 'world'
let {p: [x, {}]} = {p: ['hello', {y: 'world'}]}; // x = 'hello'

// 不完全解构
let {p: [{ y }, x]} = {p: [{y: 'hello'}]}; // x = undefined  y = 'hello'

// 剩余运算符
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}; // a = 10  b = 20  rest = {c: 30, d: 40}

// 解构默认值
let {a = 10, b = 20} = {a: 3};  // a = 3  b = 20
let {a: aa = 100, b: bb = 200} = {a: 3}; // aa = 3  bb = 200