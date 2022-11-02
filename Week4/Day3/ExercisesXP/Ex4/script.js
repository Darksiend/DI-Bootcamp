//Ex 4

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

students
  .filter((student) => student.isPassed === true)
  .forEach((el) =>
    console.log(
      `Good job ${el.name}, you passed the course in Information Technology`
    )
  );
