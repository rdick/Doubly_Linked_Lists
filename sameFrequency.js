
let arr = [222, 22]
let num1 = arr[0].toString().split(''),
    num2 = arr[1].toString().split('')


let x = false

if (num1.length === num2.length) {
    let num1Set = new Set(num1),
        num2Set = new Set(num2)

    console.log(num1Set, num2Set)
    if (num1Set.size === num2Set.size) {
        x = true
    }
}