/**
 * 模板字符串(template string)是增强版的字符串，用反引号(``)标识；
 * 可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量；
 * 如果{}中的值不是字符串，将按照一般规则转为字符串，比如{}中是一个对象，将默认调用对象的toString()方法；
 * 如果{}内部是一个字符串，会原样输出；
 * 模板字符串中也可嵌套模板字符串；
 */


/**
 * 传统用法，输出模板通常为：
 */
$('#res').append(
    'there are <b>' + data.a + '</b>' +
    '<em>' + data.b + '</em> are on it'
);


/**
 * 传统写法较为繁琐不方便，
 * ES6引入模板字符串
 */
$('#res').append(`
    there are <b> ${data.a} </b> <em> ${data.b} </em> are on it
`);


/**
 * 普通字符串
 * 
 * "In JavaScript 
 * is a line-feed."
 */
`in javascript \n is a line-feed.`


/**
 * 多行字符串
 * 所有的空格和缩进都会被保留在输出之中
 * 如果不需要首尾的空格，可以用trim()消去
 * 
 * "In JavaScript this is
 * not legal.   "
 * 
 * "In JavaScript this is
 * not legal."
 */
`In JavaScript this is
not legal.   `
`In JavaScript this is
not legal.   `.trim()


/**
 * 字符串中嵌入变量
 * 需要将变量名写在${}之中
 * {}内部可以放入任意的js表达式，可以进行运算，以及引用对象属性
 */
var name = 'zs';
var time = 'today';
`Hello ${name}, how are you ${time}?` // "Hello zs, how are you today?"

var obj = {x: 1, y: 2};
`${obj.x + obj.y}` // "3"


/**
 * 如果在模板字符串中需要使用反引号，
 * 则在反引号前面要用反斜杠转义
 */
var foo = `\`Yo\` world`;   // "`Yo` world"


/**
 * 可以调用函数
 */
function fn(){
    return "hello world";
}
`foo ${fn()}` // "foo hello world"


/**
 * 如果模板字符串中的变量没有声明，将报错
 * 
 * ReferenceError: place is not defined
 */
var msg = `Hello, ${place}`;


/**
 * 需要引用模板字符串本身，在需要执行时，可以用如下写法
 */
var str = 'return' + '`Hello ${name}`';
var func = new Function('name', str);
func('jack');  // "Hello jack"

var str = '(name) => `Hello ${name}`';
var func = eval.call(null, str);
func('jack');  // "Hello jack"