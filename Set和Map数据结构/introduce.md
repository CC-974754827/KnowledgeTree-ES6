#### Map对象
Map 对象保存键值对，任何值（对象或者原始值）都可以作为一个键或一个值

#### Maps 和 Objects 的区别
* 一个Object的键只能是字符串或者Symbols，但一个Map的键可以是任意值
* Map中的键值是有序的（FIFO原则），而添加到对象中的键则不是
* Map的键值对个数可以从size属性获取，而Object的键值对个数只能手动计算
* Object都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突


#### Set对象
Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用

#### Set 中的特殊值
Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等
* +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复
* undefined 与 undefined 是恒等的，所以不重复
* NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复