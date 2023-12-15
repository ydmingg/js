let a = '12.56asd'
console.log(parseInt(a))
console.log(parseFloat(a))

// 假数据 null、undefined、''、0、false、NaN

//.toString() 不改变原来数据类型
let c = 22
let d = c.toString()
c = d
console.log(typeof c)
