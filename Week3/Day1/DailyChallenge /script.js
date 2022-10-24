let planetsList = [
  { nameofPlanet: "Mercury", numberofMoons: 0 },
  { nameofPlanet: "Venus", numberofMoons: 0 },
  { nameofPlanet: "Earth", numberofMoons: 1 },
  { nameofPlanet: "Mars", numberofMoons: 2 },
  { nameofPlanet: "Jupiter", numberofMoons: 2 },
  { nameofPlanet: "Saturn", numberofMoons: 3 },
  { nameofPlanet: "Uranus", numberofMoons: 2 },
  { nameofPlanet: "Neptune", numberofMoons: 2 },
  { nameofPlanet: "Pluto", numberofMoons: 3 },
]
let colorsArr = [
  "red",
  "blue",
  "white",
  "orange",
  "blueViolet",
  "brown",
  "gold",
  "wheat",
  "yellow",
]
let parent = document.querySelector("section")
console.log(planetsList.length)
for (i = 0; i < planetsList.length; i++) {
  let planet = document.createElement("div")

  planet.style.backgroundColor = colorsArr[i]
  planet.classList.add("planet")
  planet.style.display = "flex"
  planet.style.alignItems = "center"
  planet.style.justifyContent = "center"
  parent.append(planet)
  if (planetsList[i].numberofMoons > 0) {
    for (j = 0; j < planetsList[i].numberofMoons; j++) {
      let moon = document.createElement("div")
      planet.append(moon)
      moon.classList.add("moon")
      moon.style = "position:relative"
    }
  }
}
console.log(parent)
