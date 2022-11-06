//DC

document.querySelector(".gif-container");
document.getElementById("form").addEventListener("submit", () => {
  this.event.preventDefault();
  let apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  let xhr = new XMLHttpRequest();
  let q = document.getElementById("input").value;
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${q}&rating=g&limit=50&api_key=${apiKey}`
  );
  xhr.send();
  xhr.onload = () => {
    console.log(JSON.parse(xhr.response).data);
    let data = JSON.parse(xhr.response).data;
    createGif(data);
  };
});

function createGif(data) {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    this.event.path[1].remove();
  });
  let gif = document.createElement("div");
  gif.setAttribute("class", "gif");
  let gifImg = document.createElement("img");
  gifImg.setAttribute(
    "src",
    data[Math.floor(Math.random() * data.length)].images.original.url
  );
  gif.append(gifImg);
  gif.append(deleteBtn);
  document.getElementById("gif-container").append(gif);
}

document.getElementById("delete-all").addEventListener("click", () => {
  for (gif of document.querySelectorAll(".gif")) {
    gif.remove();
  }
});
