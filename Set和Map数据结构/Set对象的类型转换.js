/**
 * Set 与 Array 的转换
 */

// Array 转 Set
var mySet = new Set(["v1", "v2", "v3"]);  // Set(3) {"v1", "v2", "v3"}

// 用 ... 操作符，将 Set 转 Array
var myArr1 = [...mySet];  // ["v1", "v2", "v3"]
var myArr2 = Array.from(mySet);  // ["v1", "v2", "v3"]

/**
 * String 转为 Set
 * 
 * Set 中的 toString 方法不能将 Set 转换为 String
 */
var mySet = new Set('hello');  // Set(4) {"h", "e", "l", "o"}