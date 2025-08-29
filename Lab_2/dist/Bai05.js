"use strict";
function simulateTask(time) {
    return new Promise((rsl) => {
        setTimeout(() => {
            rsl('Task done');
        }, time);
    });
}
simulateTask(2000).then((message) => {
    console.log(message);
});
