let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const my_Promise = new Promise<Number[]>((result) => {
    setTimeout(() => {
        console.log("Array: " + arr)
        result(arr)
    }, 1000)
})
