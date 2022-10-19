//With 1 Loop

let pattern = "";
for (i = 0; i < 6; i++) {
  pattern += "*";
  console.log(`${pattern}\n`);
}

//With 2 Loops
let str = "";
for (i = 0; i < 7; i++) {
  for (j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
  str = "";
}
