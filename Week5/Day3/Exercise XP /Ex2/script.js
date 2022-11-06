//Ex2

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 4000);
}).then((result) => console.log(result));
