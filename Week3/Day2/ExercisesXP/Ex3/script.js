//Ex3

let allBoldItems;

function getBold_items() {
  allBoldItems = document.querySelectorAll("strong");
  console.log(allBoldItems);
}

function highlight() {
  for (i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "red";
  }
}

function return_normal() {
  for (i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}
getBold_items();
for (i = 0; i < allBoldItems.length; i++) {
  allBoldItems[i].onmouseover = function () {
    highlight();
  };
}

for (i = 0; i < allBoldItems.length; i++) {
  allBoldItems[i].onmouseout = function () {
    return_normal();
  };
}
