// continue array: map, reduce, sort, concat
let students = [
  {
    firstName: "Nguyen Van",
    lastName: "A",
    mark: 10,
  },
  {
    firstName: "Le Thi",
    lastName: "B",
    mark: 9,
  },
  {
    firstName: "Ngo Van",
    lastName: "C",
    mark: 10,
  },
];
// need a list student with fullName
console.log("original: ", students);

let studentsFullName = students.map((student) => {
  console.log("student: ", student);
  return student.firstName + " " + student.lastName;
});
console.log("studentsFullName: ", studentsFullName);
// need a list student with one more attribute: fullName
let studentsNew = students.map((student, index, arr) => {
  // student.fullName = student.firstName + " " + student.lastName;
  // let newStudent = {
  //   firstName: student.firstName,
  //   lastName: student.lastName,
  //   mark: student.mark,
  //   fullName: student.firstName + " " + student.lastName,
  // };
  // spread operator
  // let newStudent = {
  //   ...student,
  // };
  // console.log("a, b, c, d: ", index, arr );
  let newStudent = {
    ...student,
    fullName: student.firstName + " " + student.lastName,
  };
  return newStudent;
});

console.log("studentNew: ", studentsNew);
// students[0].fullName = "TEST";
// studentsNew.pop();
// console.log("studentNew: ", studentsNew);
// console.log("original: ", students);

// reduce
let numbers = [1, 3, 4, 2, 6, 11];

let total = numbers.reduce((a, b, index) => {
  // console.log("a, b, index: ", a, b, index);
  console.log("a, b: ", a, b);
  return a + b;
});
console.log("total: ", total);

// caculate all odd number
let totalOdd = numbers.reduce((a, b) => {
  if (b % 2 === 1) {
    return a + b;
  }
  return a;
}, 0);
console.log("totalOdd: ", totalOdd);

// sort
let sortNumbers = numbers.sort(); // apply for string data item
console.log("sortNumbers: ", sortNumbers);

let sortDescNumbers = numbers.sort((number1, number2) => {
  return number2 - number1;
});
console.log("sortDescNumbers: ", sortDescNumbers);

// sort students
students.push({
  firstName: "tran Thi",
  lastName: "D",
  mark: 5,
});
console.log("students: ", students);
let sortMarkStudents = students.sort((student1, student2) => {
  // if (student1.mark > student2.mark) {
  //   return 1;
  // } else if (student1.mark < student2.mark) {
  //   return -1;
  // } else {
  //   return 0;
  // }
  return student1.mark - student2.mark;
});
console.log("sortMarkStudents: ", sortMarkStudents);

let sortFirstNameStudents = students.sort((student1, student2) => {
  // if (student1.firstName < student2.firstName) {
  //   return 1;
  // } else if (student1.firstName > student2.firstName) {
  //   return -1;
  // } else {
  //   return 0;
  // }
  return student1.firstName.localeCompare(student2.firstName);
});

console.log("sortFirstNameStudents: ", sortMarkStudents);
// sort firstName length ascending
let sortFirstNameLengthStudents = students.sort((student1, student2) => {
  return student1.firstName.length - student2.firstName.length;
});

console.log("sortFirstNameLengthStudents: ", sortFirstNameLengthStudents);
console.log("numbers concat students: ", numbers.concat(students));

////// object - property, methods (OOP)
var car = {
  name: "Fiat",
  color: "White",
  weigth: 850,
  start: function () {
    // console.log(car.name + " starting....");
    console.log(this.name + " starting...");
  },
};

console.log("car.name", car.name);
console.log('car["name"]', car["name"]);

function getValueByProperty(prop) {
  console.log("prop: ", prop);
  return car[prop];
}

console.log("getValueByProperty('name')", getValueByProperty("name"));
console.log("getValueByProperty('color')", getValueByProperty("color"));

car.model = "2020";
console.log("car: ", car);
// this.name = "TEST";
let start = car.start.bind(car);
car.start();
start();
