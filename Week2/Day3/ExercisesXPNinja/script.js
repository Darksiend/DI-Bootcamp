//Ex1

person1 = {
  name: "Anton Chesnokov",
  mass: 110,
  height: 188,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

person2 = {
  name: "Ivan Ivanov",
  mass: 112,
  height: 188,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

function compaerBMI() {
  if (person1.bmi() > person2.bmi()) {
    return console.log(person1.name);
  } else {
    return console.log(person2.name);
  }
}

compaerBMI();

//Ex2

const gradeList = [45, 67, 43, 87, 98, 68, 100];

function avgCounter(gradeList) {
  let sum = 0;
  for (i = 0; i < gradeList.length; i++) {
    sum += gradeList[i];
  }
  return sum / gradeList.length;
}

function isPassed() {
  avg = avgCounter(gradeList);
  if (avg > 65) {
    console.log("You Passed!");
  } else {
    console.log("You must repeat this course!");
  }
}

isPassed();
