console.log("111");
async function addResToDom() {
  await fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((res) => console.log(res));

  console.log("!!!");
}

addResToDom();
