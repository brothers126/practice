let arr1 = [10, 20, 30, 40, 50, 60]

// let aaa = arr1.find((e) => {
//     return e < 40
// })


let aaa = arr1.filter((e) => {
    return e < 40
})

console.log(aaa)