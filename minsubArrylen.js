// const arr = [2, 1, 6, 5, 4]
// const min = 9

// let data = []
// let i = 0,
//     j = 0

// let minArr = Infinity
// let sum = 0

// while (arr.length > j) {
//     if (i === j) j++
//     if (sum === min && (j - i) < minArr) {
//         console.log('1 ----- j: ', j, 'i: ', i, 'sum: ', sum)
//         minArr = j - i


//         sum = sum + arr[j]
//         console.log('2 ----- j: ', j, 'i: ', i, 'sum: ', sum, 'minArr: ', minArr)
//     }
//     else if (sum < min) {
//         sum = sum + arr[j]
//         console.log('j: ', j, 'sum: ', sum)

//         j++
//     } else {
//         sum = sum - arr[i]
//         console.log('i: ', i, 'sum: ', sum)

//         i++
//     }
//     if (i + 1 === arr.length) break
// }
// console.log(minArr)



let arr = [2, 3, 1, 2, 4, 3],
    sumA = 7,
    sumE = 0,

    prev = 0,
    next = 0,

    count = 0,
    max = Infinity

while (arr.length >= next) {
    if (sumA >= sumE) {
        if (sumA === sumE && count < max) max = count
        sumE = sumE + arr[next]
        count++
        next++
    } else {
        sumE = sumE - arr[prev]
        count--
        prev++
    }
}
console.log(max)
