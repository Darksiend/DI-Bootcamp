//Ex4

const allBooks = [
  {
    title: "Feynman Lectures on Physics.",
    author: "Richard Phillips Feynman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_Feynman_Lectures_on_Physics.jpg/1280px-The_Feynman_Lectures_on_Physics.jpg",
    alreadyRead: true,
  },
  {
    title: "The God Equation: The Quest for a Theory of Everything",
    author: "Michio Kaku",
    image:
      "https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/66590930-mitio-kaku-uravnenie-boga-v-poiskah-teorii-vsego.jpg",
    alreadyRead: true,
  },
]

let table = document.createElement("table")

document.getElementById("listBooks").append(table)
table.style.border = "1px solid black"
table.style.textAlign = "center"
for (i = 0; i < allBooks.length; i++) {
  let parent = document.createElement("tr")
  document.querySelector("table").append(parent)
  let image = document.createElement("img")
  image.src = allBooks[i].image
  image.style.width = "100px"
  image.style.height = "150px"
  parent.append(image)
  let title = document.createElement("h1")
  title.textContent = allBooks[i].title
  parent.append(title)
  let words = document.createElement("p")
  words.textContent = "written by"
  parent.append(words)
  let author = document.createElement("h3")
  author.textContent = allBooks[i].author
  parent.append(author)
  if ((allBooks[i].alreadyRead = true)) {
    title.style.color = "red"
    words.style.color = "red"
    author.style.color = "red"
  }
}
