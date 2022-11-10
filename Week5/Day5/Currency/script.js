//Curren

let api_key = "59f8eb01ea592b04298bd2af";
let url = "https://v6.exchangerate-api.com/v6/59f8eb01ea592b04298bd2af/codes";
async function getAllCodesJSON() {
  const response = await fetch(url);
  const codes = await response.json();
  return codes.supported_codes;
}

getAllCodesJSON().then((codesArr) => {
  addAllCodesToSelect(codesArr);
});

function addAllCodesToSelect(codesArr) {
  codesArr.forEach((code) => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    option1.textContent = code[0] + "  " + code[1];
    option1.value = code[0];
    option2.textContent = code[0] + "  " + code[1];
    option2.value = code[0];
    document.getElementById("first-select").append(option1);
    document.getElementById("second-select").append(option2);
  });
}

function getConversionRate() {
  let firstCur = document.getElementById("first-select").value;
  let secondCur = document.getElementById("second-select").value;
  fetch(
    `https://v6.exchangerate-api.com/v6/${api_key}/pair/${firstCur}/${secondCur}`
  )
    .then((res) => res.json())
    .then((res) => convertAmount(res.conversion_rate));
}

function convertAmount(rate) {
  let amount = document.getElementById("first-cur").value;
  document.getElementById("convert-res-container").textContent = amount * rate;
}
