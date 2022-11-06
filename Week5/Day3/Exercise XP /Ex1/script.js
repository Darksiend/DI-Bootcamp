//Ex1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Resolve");
    } else if (num > 10) {
      reject("Reject");
    }
  });
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//In the example, the promise should resolve
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
