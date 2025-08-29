const prom1 = new Promise((result) => {
    result('Promise 1 done')
})

const prom2 = new Promise((result) => {
    result('Promise 2 done')
})

const prom3 = new Promise((result) => {
    result('Promise 3 done')
})

Promise.all([prom1, prom2, prom3]).then((result) => {
    console.log(result)
})