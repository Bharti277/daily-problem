const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("promise 1 is resolved");
    reject("promise 1 is rejected");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2 is rejected");
    // resolve("promise 2 is resolved");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("promise 3 is resolved");
    reject("promise 3 is rejected");
  }, 4000);
});

// promise all
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// promise allSettled
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   promise race
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// promise any
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
