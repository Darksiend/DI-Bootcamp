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

//Gold

let numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

function bubbleSort(numbers) {
  console.log(numbers);
  for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
        console.log(numbers);
      }
      console.log(numbers);
    }
  }
}

function bubbleSort2(numbers) {
  console.log(numbers);
  for (i = 0; i < numbers.length; i++) {
    for (j = numbers.length; j >= 0; j--) {
      if (numbers[j + 1] > numbers[j]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
        console.log(numbers);
      }
      console.log(numbers);
    }
  }
}

bubbleSort(numbers);
bubbleSort2(numbers);

let numbers2 = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
numbers2.toString();
numbers2.join("+");
