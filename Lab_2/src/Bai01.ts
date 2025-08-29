const myPromise = new Promise((rsl) => {
    setTimeout(() => {
        rsl("Hello Async");
    }, 2000)
})

myPromise.then((message) => {
    console.log(myPromise)
})