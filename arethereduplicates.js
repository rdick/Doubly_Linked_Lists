const arr = [1, 2, 3, 1]
const set = new Set(arr)

let x = false


if (set.size !== arr.length) x = true
console.log(x)