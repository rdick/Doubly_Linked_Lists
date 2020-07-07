
let sub = ''


let data = []
let count = 0
let previous = 0,
    after = 0
let max = 0

while (sub.length > after) {
    if (data[sub[after]] === undefined || previous > data[sub[after]]) {

        count++
        data[sub[after]] = after
        after++

    } else {

        previous = data[sub[after]] + 1
        data[sub[after]] = after
        after++
        count = (after - previous)

    }


    if (count > max) max = count
}
console.log(max)



// while (sub.length > j) {
//     set.add(sub[j])
//     if (set.size !== (j - i + 1)) {

//         if (count > max) max = count
//         console.log(max, sub[j])

//         set.delete(sub[j])

//         i++
//         set.add(sub)
//         count--
//     } else {
//         console.log(sub[j])
//         count++
//         j++
//     }
// }
// if (count > max) max = count
// console.log(max)