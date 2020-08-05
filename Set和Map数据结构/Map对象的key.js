/**
 * Map对象的key
 */

// key 是字符串   因为 keyStr === 'str';
var myMap = new Map();
var keyStr = 'str';
myMap.set(keyStr, '和键 keyStr 相关联的值');
myMap.get(keyStr); // "和键 keyStr 相关联的值"
myMap.get('str'); // "和键 keyStr 相关联的值"

// key 是对象   因为 keyObj !== {}
var myMap = new Map();
var keyObj = {};
myMap.set(keyObj, '和键 keyObj 相关联的值');
myMap.get(keyObj); // "和键 keyObj 相关联的值"
myMap.get({}); // undefined
 
// key 是数组   因为 keyArr !== []
var myMap = new Map();
var keyArr = [];
myMap.set(keyArr, '和键 keyArr 相关联的值');
myMap.get(keyArr); // "和键 keyArr 相关联的值"
myMap.get([]); // undefined

// key 是函数   因为 keyFunc !== function(){}
var myMap = new Map();
var keyFunc = function(){};
myMap.set(keyFunc, '和键 keyFunc 相关联的值');
myMap.get(keyFunc); // "和键 keyFunc 相关联的值"
myMap.get(function(){}); // undefined

// key 是NaN   
// 虽然NaN和任何值(包括NaN)都不相等，但NaN作为Map的键来说是没有区别的
var myMap = new Map();
myMap.set(NaN, 'not a number');
myMap.get(NaN); // "not a number"

var otherNaN = Number('foo');
myMap.get(otherNaN); // "not a number"