async function addResToDom() {
  const response = await fetch("http://localhost:3000/");
  const names = await response.json();
  console.log(names);
}

addResToDom();
