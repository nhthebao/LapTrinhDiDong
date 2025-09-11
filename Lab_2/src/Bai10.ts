const myPromise_10 = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5; // 50/50 chance
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

myPromise_10
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });

  export default myPromise_10