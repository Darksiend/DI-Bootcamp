//Ex1

let select = document.getElementById("genres");
let options = document.querySelectorAll("option");
console.log(options);

newSelect = document.createElement("option");
newSelect.value = "classic";
newSelect.innerHTML = "Classic";
newSelect.selected = true;
select.append(newSelect);
select.onchange = function () {
  console.log("Changed");
  console.log(select.value);
};
