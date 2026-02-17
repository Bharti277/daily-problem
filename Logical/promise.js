Promise.resolve(5)
  .then((val) => val * 2)
  .then((val) => {
    throw new Error("Oops");
  })
  .then((val) => console.log(val))
  .catch((err) => console.log("Caught"))
  .then(() => console.log("After catch"));
