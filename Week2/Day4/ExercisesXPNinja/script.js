//Ex1
let number = Math.floor(Math.random() * 100);
for (let i = 0; i < number; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log(number);

//Ex2

function capitalize(string) {
  let arr1 = string.split("");
  let arr2 = string.split("");
  for (i = 0; i < arr1.length; i++) {
    if (i % 2 === 0 && i != 0) {
      arr1[i] = arr1[i].toLowerCase();
    } else {
      arr1[i] = arr1[i].toUpperCase();
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (!(i % 2 === 0) && i != 0) {
      arr2[i] = arr2[i].toLowerCase();
    } else {
      arr2[i] = arr2[i].toUpperCase();
    }
  }
  return arr1.join("") + "," + arr2.join("");
}

console.log(capitalize("fdbjkxv"));

//Ex3

function isPalindrome(string) {
  let arr = string.split("");
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (indexOf(arr[i]) == (arr.length - 1) / 2) {
      let center = indexOf(arr[i]);
    }
  }
  console.log(center);
}

isPalindrome("madam");
