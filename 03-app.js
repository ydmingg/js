let arr = [11, 22, 33, 44, 55, 66]

for (const key in arr) {
	// console.log(key, arr, arr[key])
}

// 跳出循环
label: for (var i = 0; i < 10; i++) {
	if (i == 0) continue //跳出当前循环
	for (var j = 0; j < 10; j++) {
		if (i + j === 6) {
			console.log('j=' + j)
			break label
		}
	}
	if (i == 8) break //终止循环
	console.log('i=' + i)
}
