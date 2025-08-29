function simulateTask(time : any) {
    return new Promise((rsl) => {
        setTimeout(() => {
            rsl('Task done')
        }, time)
    })
}

simulateTask(2000).then((message) => {
    console.log(message)
})