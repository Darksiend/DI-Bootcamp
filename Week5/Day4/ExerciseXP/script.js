//Ex1

fetch("https://www.swapi.tech/api/starships/9/")
  .then((response) => response.json())
  .then((result) => console.log(result));

async function fetchFromUrl() {
  return await fetch("https://www.swapi.tech/api/starships/9/")
    .then((response) => response.json())
    .then((result) => console.log(result));
}
