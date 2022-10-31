//Ex 4

((name) => {
  let div = document.createElement("div");
  let userNameDiv = document.createElement("div");
  let userNamePicture = document.createElement("img");
  userNameDiv.textContent = name;
  div.append(userNameDiv);
  div.append(userNamePicture);
})("Anton");
