function throwError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Something went wrong')
        }, 1000)
    })
}

throwError().catch((error) => {
    console.log(error)
})
