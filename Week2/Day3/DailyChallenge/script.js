//With 1 Loop

let pattern = "";
for (i = 0; i < 6; i++) {
  pattern += "*";
  console.log(`${pattern}\n`);
}

//With 2 Loops
let str = "";
for (i = 0; i < 5; i++) {
  for (i = 0; i < 5; i++) {
    str += "*";
    console.log(str);
  }
  print("\n");
}
