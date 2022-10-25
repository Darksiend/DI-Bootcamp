let planetsList = [
  { nameofPlanet: "Mercury", numberofMoons: 0, color: "red" },
  { nameofPlanet: "Venus", numberofMoons: 0, color: "blue" },
  { nameofPlanet: "Earth", numberofMoons: 1, color: "white" },
  { nameofPlanet: "Mars", numberofMoons: 2, color: "orange" },
  { nameofPlanet: "Jupiter", numberofMoons: 2, color: "blueViolet" },
  { nameofPlanet: "Pluto", numberofMoons: 3, color: "brown" },
  { nameofPlanet: "Saturn", numberofMoons: 3, color: "gold" },
  { nameofPlanet: "Uranus", numberofMoons: 2, color: "wheat" },
  { nameofPlanet: "Neptune", numberofMoons: 2, color: "yellow" },
];
let parent = document.querySelector("section");
console.log(planetsList.length);
for (i = 0; i < planetsList.length; i++) {
  let planet = document.createElement("div");
  planet.classList.add("planet");
  planet.style.display = "flex";
  planet.style.alignItems = "center";
  planet.style.justifyContent = "center";
  planet.style.backgroundColor = planetsList[i].color;
  parent.append(planet);
  if (planetsList[i].numberofMoons > 0) {
    for (j = 0; j < planetsList[i].numberofMoons; j++) {
      let moon = document.createElement("div");
      planet.append(moon);
      moon.classList.add("moon");
      moon.style = "position:relative";
    }
  }
}
console.log(parent);
