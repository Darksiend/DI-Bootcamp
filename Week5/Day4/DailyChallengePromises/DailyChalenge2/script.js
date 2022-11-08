//DC2

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let isFilled = true;
  document.querySelectorAll("input[type=text]").forEach((el) => {
    if (el.value === "") {
      isFilled = false;
    }
  });
  if (isFilled) {
    const coordsObj = [
      {
        lat: Number(document.getElementById("first-lat").value),
        lng: Number(document.getElementById("first-lng").value),
      },
      {
        lat: Number(document.getElementById("second-lat").value),
        lng: Number(document.getElementById("second-lng").value),
      },
    ];
    console.log(coordsObj);
    fetchSunrices(coordsObj);
  }
});

function fetchSunrices(coordsObj) {
  const arrayFetchSunrise = coordsObj.map((cord) =>
    fetch(`https://api.sunrise-sunset.org/json?lat=${cord.lat}&lng=${cord.lng}`)
      .then((response) => response.json())
      .catch((err) => console.log(err))
  );
  Promise.all(arrayFetchSunrise)
    .then((responses) => {
      let resArr = [];
      responses.forEach((resp) => {
        resArr.push(resp.results.sunrise);
      });
      console.log(resArr);
      addResToDOM(resArr[0], resArr[1]);
    })
    .catch((error) => {
      console.error(error);
    });
}

function addResToDOM(lat, lng) {
  document.getElementById("first-city-sunrise").textContent =
    "First City Sunrise:" + lat;
  document.getElementById("second-city-sunrise").textContent =
    "Second City Sunrise:" + lng;
}
