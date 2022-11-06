//XPGOLD
const urls = [
  "https://www.swapi.tech/api/people/1",
  "https://www.swapi.tech/api/people/2",
  "https://www.swapi.tech/api/people/3",
  "https://www.swapi.tech/api/people/4",
];

let promise = Promise.all(urls).then((values) => {
  fetch(values).then(console.log("Fetched"));
});
console.log(promise);
