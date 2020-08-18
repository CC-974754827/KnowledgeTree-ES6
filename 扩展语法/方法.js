/**
 * 函数参数中的应用
 */
// ES6之前，如果使用数组作为参数分别传递给函数中的参数，可以使用Function的apply()方法
// apply方法接受一个数组，将它们分拆成单个参数传递给函数进行调用
function myFunction(a, b){
    return a + b;
}
var data = [1, 2];
var res = myFunction.apply(null, data);
console.log(res);  // 3

// ES6的展开语法
// var res = myFunction(...data);  ====>  var res = myFunction(1, 4);
function myFunction(a, b){
    return a + b;
}
var data = [1, 4];
var res = myFunction(...data);
console.log(res);  // 5




/**
 * 数组的相关应用
 * 顺序根据插入顺序一致
 */
// 一、数组的合并
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var arr3 = [...arr1, ...arr2];
console.log(arr3);  // [1, 2, 3, 2, 3, 4]


// 二、在push方法中的运用
// ES6之前，将一个数组的内容追加到另一个数组中
var arr1 = [2, 3, 4];
var arr2 = [5];
Array.prototype.push.apply(arr2, arr1);
console.log(arr2);  // [5, 2, 3, 4]

// ES6的展开语法可以以更简洁的形式实现
// arr2.push(...arr1);  ====>  arr2.push(2, 3, 4);
var arr1 = [2, 3, 4];
var arr2 = [5];
arr2.push(...arr1);
console.log(arr2);  // [5, 2, 3, 4]


// 三、传递多个数组参数
var arr1 = [1];
var arr2 = [2];
var arr3 = [...arr1, ...arr2, ...[3, 4]];
var arr4 = [5];
function myFunction(a, b, c, d, e){
    return a + b + c + d + e;
}
var res = myFunction(...arr3, ...arr4);
console.log(res);  // 15




/**
 * 剩余参数的应用
 * js内部有个arguments对象，可以拿到全部实参，
 * ES6带来一个新的对象，可以拿到除了开始参数外的参数，即剩余参数，
 * 可以用展开语法(...)进行获取
 */
// ES6之前可以这样获取剩余参数
function myFunction(a, b){
    console.log(myFunction.length);  // 2
    const args = Array.prototype.slice.call(arguments, myFunction.length);
    console.log(args);  // [3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);

// ES6中，可以用展开语法
function myFunction(a, b, ...args){
    console.log(args);  //  [3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);

// 一旦函数中的参数第一个参数使用剩余参数，便不能添加任何参数，否则会抛出错误
// SyntaxError: Rest parameter must be last formal parameter
function myFunction(...args, a){
    console.log(args);  //  [3, 4, 5]
}
myFunction(1, 2, 3, 4, 5);
