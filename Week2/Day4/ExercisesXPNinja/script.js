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
  arr = string.split("");
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && i != 0) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(capitalize("fdbjkxv"));
