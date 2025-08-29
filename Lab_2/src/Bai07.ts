const promise1 = new Promise((result) => {setTimeout(result, 500, "1")});
const promise2 = new Promise((result) => {setTimeout(result, 100, "2")});
const promise3 = new Promise((result) => {setTimeout(result, 200, "3")});

Promise.race([promise1, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})