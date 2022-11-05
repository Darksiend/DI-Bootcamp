//Ex1

let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset:2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
xhr.send();

xhr.onload = () => {
  console.log(JSON.parse(xhr.response).data);
};

//Ex2
