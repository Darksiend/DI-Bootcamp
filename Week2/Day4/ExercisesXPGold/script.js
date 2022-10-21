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
