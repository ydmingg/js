// 浅拷贝：拷贝对象表层，如果对象的属性值是引用类型，则只传递不拷贝
const obj = {
	name: 'ds',
	age: 12,
	arr: [1, 2, 3]
}
const obj2 = {}
const obj3 = Object.assign(obj) //拷贝对象 {...obj}
// const obj4 = Array.prototype.concat(arr)  [...arr]  //拷贝数组
for (const key in obj) {
	obj2[key] = obj[key]
}
// console.log(obj.age === obj3.age)
// console.log(obj.age === obj2.age)
obj2.arr[0] = 999
obj2.age = 66
console.log(obj.age, obj2.age, obj2.age === obj.age)
console.log(obj.arr, obj2.arr, obj2.arr === obj.arr)

// 深拷贝：递归拷贝对象的所有东西
const obj_s = {
	name: 'ds',
	age: 12,
	arr: [1, 2, 3]
}
let obj11 = {}

function deepCopy(newObj, oldObj) {
	for (const key in oldObj) {
		//先检测属性值是否为数组后检测对象
		if (oldObj[key] instanceof Array) {
			newObj[key] = []
			deepCopy(newObj[key], oldObj[key])
		} else if (oldObj[key] instanceof Object) {
			newObj[key] = {}
			deepCopy(newObj[key], oldObj[key])
		} else {
			newObj[key] = oldObj[key]
		}
	}
}
deepCopy(obj11, obj_s)
obj11.age = 66
obj11.arr[0] = 999
console.log(obj_s.age, obj11.age, obj11.age === obj_s.age)
console.log(obj_s.arr, obj11.arr, obj11.arr === obj_s.arr)

// 浅拷贝的属性值遇到引用类型时，并没有拷贝，知识传递了该引用值，并没有拷贝，所以但改变拷贝后该属性值时，改变的为对应原来的值，
// 而深拷贝时，则不会改变原来的值
