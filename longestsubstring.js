

let data = 'rithmschool'

let prev = 0
let next = 0
let count = 0
let max = 0

let hash = []

while (data.length > next) {
    if (hash[data[next]] === undefined || hash[data[next]] < prev) {

        hash[data[next]] = next

        next++
        count++

        if (count > max) max = count

    } else {

        prev = hash[data[next]] + 1
        hash[data[next]] = next

        next++
        count = next - prev


    }
}
console.log(max)
// console.log(1, data[next], count)

// console.log(2, data[next], count)
