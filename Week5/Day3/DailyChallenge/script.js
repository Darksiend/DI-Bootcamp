//DC
arr = ["Apple", "Orange", "Peach", "Tea", "Cofee"];

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    console.log("Готово.");

    if (arr.every((el) => typeof el === "string")) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
      }
      resolve(arr);
    } else {
      reject("Arr consist non String Elements");
    }
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      arr.sort();
      resolve(arr);
    } else {
      reject("Less than 4 elements in Arr");
    }
  });
}

makeAllCaps(arr).then(sortWords(arr).then(console.log(arr)));
