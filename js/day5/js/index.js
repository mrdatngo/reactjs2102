//// array
let marks = [9, 10, 3, 2, 5, 10];
let names = ["Dai", "Tuan Anh", "Hai", "Hiep", "Cong"];

console.log("marks: ", marks);
console.log("marks[1]: ", marks[1]);

for (let i = 0; i < marks.length; i++) {
  console.log("i, marks[i]", i, marks[i], names[i]);
}

// object
let student1 = {
  name: "Dai",
  mark: 9,
};

console.log("name: ", student1.name, student1.mark);

let students = [
  student1,
  {
    name: "Tuan Anh",
    mark: 10,
  },
  {
    name: "Hai",
    mark: 3,
  },
];
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log("Student ", i, student.name, student.mark);
}
// handle with methods
let reactJSStudents = [];

let newStudent = {
  name: "Nguyen Van A",
  mark: 0,
};

reactJSStudents.unshift(newStudent);
reactJSStudents.unshift({
  name: "Minh Ngoc",
  mark: 0,
});

reactJSStudents.unshift({
  name: "Tuan Hai",
  mark: 0,
});

console.log("reactJSStudents: ", reactJSStudents);
// let theLastStudent = reactJSStudents.pop();
// console.log("reactJSStudents: ", reactJSStudents, theLastStudent);
// let theFirstStudent = reactJSStudents.shift();
// console.log("reactJSStudents: ", reactJSStudents, theFirstStudent);
// notice regular use: push(), pop()
//// indexOf, lastIndexOf, slice, splice, reverse, join
console.log("marks: ", marks);
let indexOf10 = marks.indexOf(10);
console.log("indexOf10: ", indexOf10);
console.log("index Of ", names.indexOf("Hai"));

console.log(
  "index Of student Ngoc",
  reactJSStudents.indexOf({
    name: "Minh Ngoc",
    mark: 0,
  }),
  "\n A",
  reactJSStudents.indexOf(newStudent)
);

console.log("{} == {}", {} == {});

let number1 = 3;
let number2 = number1;
number2 = 5;
console.log("number1: ", number1, "number2: ", number2);

let studentA = {
  name: "Nguyen Van A",
};

let studentAClone = studentA;
studentAClone.name = "Nguyen Van B";

console.log("studentA: ", studentA);
console.log("lastIndexOf10: ", marks.lastIndexOf(10));
console.log("marks.slice(start, end)", marks.slice(1));
console.log("marks: ", marks);
console.log(
  "marks.splice(startIndex, how_many_remove, how_many_append): ",
  marks.splice(1, 2, 9, 5)
);
// marks.splice(3, 1, 7);

console.log("marks: ", marks);
// // console.log("marks.join()", marks.join());
// let result = "";
// let devider = ",";
// for (let i = 0; i < marks.length; i++) {
//   result += marks[i] + devider;
// }
// result = result.slice(0, result.length - 1);

// console.log("result: ", result);
console.log("marks: ", marks.join(" | "));
console.log("marks.reverse(): ", marks.reverse());

//// callback
function hello() {
  console.log("Hello");
}

function say(callback) {
  callback();
}
console.log("hello", hello);
say(hello);

// find, filter, map, reduce, concat
console.log("reactJSStudents: ", reactJSStudents);

function findCondition(student) {
  console.log("Log Student: ", student);
  return student.name == "Nguyen Van A";
}

// function find(callbackFind) {
//   let foundStudent;
//   for (let i = 0; i < reactJSStudents.length; i++) {
//     if (callbackFind(reactJSStudents[i])) {
//       foundStudent = reactJSStudents[i];
//       break;
//     }
//   }
//   return foundStudent;
// }
// console.log("foundStudent: ", find(findCondition));

let foundStudent = reactJSStudents.find(findCondition);
console.log("foundStudent: ", foundStudent);

// let ngocStudent = reactJSStudents.find(
//   (student) => student.name == "Minh Ngoc"
// );

// console.log("ngocStudent:", ngocStudent);

// let teachers = ["Manh", "Cong", "Dai", "Truong"];
// console.log(
//   "findCong: ",
//   teachers.find((teacher) => teacher == "Cong")
// );
reactJSStudents.push({
  name: "Nguyen Truong",
  mark: 10,
});

reactJSStudents.unshift({
  name: "Vo Linh",
  mark: 10,
});

reactJSStudents.unshift({
  name: "Le Minh",
  mark: 9,
});

console.log("reactJSStudents: ", reactJSStudents);
let students10Marks = reactJSStudents.filter((student, index) => {
  return student.mark == 10 && index >= 3;
});

console.log("students10Marks: ", students10Marks);
// excersize: Tìm tất cả students có họ Nguyen
let studentsFirstNameNguyen = reactJSStudents.filter((student) => {
  return student.name.includes("Nguyen");
});

console.log("studentsFirstNameNguyen: ", studentsFirstNameNguyen);
