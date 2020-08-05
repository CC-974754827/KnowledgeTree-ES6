// 数组去重
var mySet = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log([...mySet]);  // [1, 2, 3, 4, 5]

// 并集
var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);
console.log(new Set([...a, ...b]));  // Set(4) {1, 2, 3, 4}

// 交集
var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);
console.log(new Set([...a].filter(x => b.has(x))));  // Set(2) {2, 3}

// 差集
var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);
console.log(new Set([...a].filter(x => !b.has(x))));  // Set(1) {1}