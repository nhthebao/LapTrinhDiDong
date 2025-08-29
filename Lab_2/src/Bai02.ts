function getNum() {
    return new Promise((rsl) => {
        setTimeout(() => {
            rsl(10)
        }, 1000)
    })
}

getNum().then((number) => {
    console.log(number)
}) 