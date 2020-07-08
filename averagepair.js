const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19],
    avg = 8

let start = 0,
    end = arr.length - 1,
    match = false


while (start != end) {
    if ((arr[start] + arr[end]) / 2 === avg) {
        match = true
        break
    }

    if ((arr[start] + arr[end]) / 2 > avg) {
        end--
    } else {
        start++
    }
}
console.log(match)


