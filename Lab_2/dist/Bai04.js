"use strict";
function randomNumber() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random() * 10;
        if (randomNum % 2 === 0) {
            resolve(randomNum);
        }
        else {
            reject('Number rejectOdd number generated, something went wrong');
        }
    });
}
randomNumber()
    .then((number) => {
    console.log(number);
})
    .catch((error) => {
    console.log(error);
});
