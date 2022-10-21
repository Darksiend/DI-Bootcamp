//Ex1
function isBlank(string) {
  if (string === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank("vnjdfklnvdf"));

//Ex2

//console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
  let arr = name.split(" ");
  return arr[0] + " " + arr[1][0].toUpperCase() + ".";
}

console.log(abbrevName("Anton Chesnokov"));

//Ex3

function swap(sent) {
  let arr = sent.split("");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  console.log(arr.join(""));
}

swap("The Quick Brown Fox");

//Ex4

function isOmnipresent() {
  let arr = [
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1,
  ];
  let number = arr[1];

  for (i = 0; i < 3; i++) {
    let flag = false;
    for (j = 0; j < 1; j++) {
      if (arr[0][i][j] === number) {
        flag = true;
      }
    }
    if (flag === false) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isOmnipresent());
