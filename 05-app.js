// instanceof 检测是否为对象或者数组

function fun() {
	// arguments 是个伪数组
	console.log(arguments)
	// 阶乘n!：n*(n-1);
	// function change(n) {
	// 	if (n == 1) return
	// 	return n * fun(n - 1)
	// }
}

fun(1, 2, 3, 4)

// this绑定 .call() .apply() .bind()
function fun1(c1, c2) {
	console.log(this.a + this.b, c1, c2)
}
let obj = {
	a: 11,
	b: 22
}
fun1.call(obj, 99, 88)
fun1.apply(obj, [99, 88])

// 但只有一个参数时，call和apply一样，但需要传递参数时，apply的参数是个数组，而call的参数可以直接写在后面；

// fun1.bind(obj, 999, 888)
let obj1 = {
	age: 12
}

function fn() {
	console.log(this)
	return 111111
}

fn.bind(obj1)
fn() // this指向window
let ff = fn.bind(obj1)
console.log(ff)
console.log(ff())

// bind()不会调用函数，能改变this指向，返回值为该函数，

function cass() {
	console.log(arguments)
	return Array.prototype.slice.apply(arguments)
}
console.log(cass(1111, 2222, 3333))

// 规则	上下文
// 对象.函数()	对象
// 函数()	window
// 数组[下标]()	数组
// IIFE	window
// 定时器	window
// DOM 事件处理函数	绑定 DOM 的元素
// call apply bind	任意指定
// 一句话：函数的上下文只有函数在被执行的时候才会知道。且执行时谁调用的函数，函数的上下文就是谁，否则就是 window 对象。
