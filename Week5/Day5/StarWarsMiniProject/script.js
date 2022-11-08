//StarwarsMiniProject
function loadCharacter() {
  console.log("click!");
  xhr = new XMLHttpRequest();
  xhr.open("GET", `https://www.swapi.tech/api/people/1`);
  xhr.send();
  console.log(xhr);
  xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    let data = JSON.parse(xhr.response);
  };

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };
  xhr.onerror = function () {
    console.log("Error something wrong###");
  };
}
