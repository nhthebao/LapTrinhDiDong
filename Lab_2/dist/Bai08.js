"use strict";
Promise.resolve(2).then(n => n = n * n).then(n => n * 2).then(n => n + 5).then(console.log);
