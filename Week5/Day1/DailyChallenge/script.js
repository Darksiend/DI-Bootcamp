//DailyChallenge

document.getElementById("form").addEventListener("submit", () => {
  this.event.preventDefault();
  let obj = {};
  obj[this.event.target[0].id] = this.event.target[0].value;
  obj[this.event.target[1].id] = this.event.target[1].value;

  console.log(this.event.target[0].value);
  console.log(this.event.target[1].id);
  console.log(JSON.parse(JSON.stringify(obj)));
  document.getElementById("div").append(JSON.stringify(obj));
});
