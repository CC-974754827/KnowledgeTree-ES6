/**
 * Map 与 Array 的转换
 */
var arr = [["key1", "value1"], ["key2", "value2"]];
// Map 构造函数可以将一个 二维 键值对数组转换为一个 Map 对象
var myMap = new Map(arr); // Map(2) {"key1" => "value1", "key2" => "value2"}
// 使用 Array.from 函数可以将一个 Map 对象转换成一个 二维 键值对数组
var arr2 = Array.from(myMap); // [["key1", "value1"], ["key2", "value2"]]
var arr3 = [...myMap];  // [["key1", "value1"], ["key2", "value2"]]

/**
 * Map 的克隆
 * 
 * Map 对象构造函数生成实例，迭代出新的对象
 */
var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);
console.log(myMap1 === myMap2);  // false

/**
 * Map 的合并
 * 
 * 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的
 */
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
var second = new Map([[1, '1'], [2, '2']]);
var merged = new Map([...first, ...second]);
console.log(merged); // Map(3) {1 => "1", 2 => "2", 3 => "three"}