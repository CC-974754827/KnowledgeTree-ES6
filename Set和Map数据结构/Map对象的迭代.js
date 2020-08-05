/**
 * Map对象的迭代
 */

/**
 * for...of
 * 
 * Map(2) {0 => "zero", 1 => "one"}
 */
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');


/**
 * 0 "zero"
 * 1 "one"
 */
for (var [key, value] of myMap) {
    console.log(key, value);
}
/**
 * entries()返回一个新的Interator对象，
 * 它按插入顺序包含了Map对象中的每一个元素的[key, value]数组
 * MapIterator {0 => "zero", 1 => "one"}
 * 
 * 返回键值对
 * 0 "zero"
 * 1 "one"
 */
for(var [key, value] of myMap.entries()){
    console.log(key, value);
}
/**
 * keys()返回一个新的Interator对象，
 * 它按插入顺序包含了Map对象中的每一个元素的键
 * 
 * 返回键名
 * 0
 * 1
 */
for(var key of myMap.keys()){
    console.log(key);
}
/**
 * values()返回一个新的Interator对象，
 * 它按插入顺序包含了Map对象中的每一个元素的值
 * 
 * 返回键值
 * zero
 * one
 */
for(var value of myMap.values()){
    console.log(value);
}


/**
 * forEach()
 * 
 * Map(2) {0 => "zero", 1 => "one"}
 */
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

/**
 * 0 "zero"
 * 1 "one"
 */
myMap.forEach(function(value, key){
    console.log(key, value);
}, myMap);