//Ex3

let promise1 = Promise.resolve(3);
promise1.then((value) => {
  console.log(value);
});

let promise2 = Promise.reject("Boo");

promise2.catch((value) => {
  console.log(value);
});
