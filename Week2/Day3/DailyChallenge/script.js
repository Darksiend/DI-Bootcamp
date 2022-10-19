//With 1 Loop

let pattern = "";
for (i = 0; i < 6; i++) {
  pattern += "*";
  console.log(`${pattern}\n`);
}

//With 2 Loops
let str = "";
for (i = 0; i < 4; i++) {
  str += "*";
  for (j = 0; j < i; j++) {
    console.log(str);
  }
}
