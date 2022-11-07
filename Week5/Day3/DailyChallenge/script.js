//DC 1
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

//DC 2
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(json) {
  return new Promise((resolve, reject) => {
    if (json !== "") {
      let morseJS = JSON.parse(morse);
      resolve(morseJS);
    } else {
      reject("Empty");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    let userWord = prompt("Put the word");
    let res = [];
    let arrUserWord = userWord.split("");
    for (let i = 0; i < arrUserWord.length; i++) {
      res.push(morseJS[arrUserWord[i]]);
      if (morseJS[arrUserWord[i]] === undefined) {
        reject("Undefiend Character");
      }
    }
    resolve(res);
  });
}

toJs(morse).then((morseJS) => {
  toMorse(morseJS).then((res) => {
    joinWords(res);
  });
});

function joinWords(morseTranslation) {
  console.log(morseTranslation.join(`\n`));
}
