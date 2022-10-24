//Ex2
function removecolor() {
  let select = document.getElementById("colorSelect");
  console.log(select.value);
  select.removeChild(select.querySelector("option"));
}
