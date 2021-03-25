console.log("Hello world");
// named for variables
var a = 20; // a is my age
var a = 30;
//
let b;
b = 40;

const c = 40;
// c = 50;

const PI = 3.14;
console.log("a=", a, "b=", b, "c=", c);

var age = 20;
var age = "reactjs";

var quantity_ = 20;

var myAge = 20;
var myAgeVer2 = 25;
// + - * /
var currentYear = 2021;
var birthYear = 1995;
var age = currentYear - birthYear;
console.log("age:", age);
console.log("3 + 4 = ", 3 + 4);
console.log("3 - 4 = ", 3 - 4);
console.log("3 * 4 = ", 3 * 4);
console.log("3 / 4 = ", 3 / 4);
console.log("3 / 0 = ", 3 / 0);
console.log("3 / 'a' = ", 3 / "a");
// number
console.log('3 + "2"', 3 + "2", typeof(3 + "2"));
console.log('3 - "2"', 3 - "2", typeof(3 - "2"));
console.log('3 * "2"', 3 * "2", typeof(3 * "2"));
console.log('3 / "2"', 3 / "2", typeof(3 / "2"));
// string
let studentName1 = "\"Vu Dinh Dai\"";
let studentName2 = '"Nguyen Minh Truong"';

console.log("studentName1: ", studentName1);
console.log("studentName2: ", studentName2);
console.log(studentName1 + studentName2);
// template string
let studentName = "Hai"
let studentAge = 20
let className = "REACTJS"
let intro = "Name: " + studentName + "; Age:" + studentAge

let temIntro = `Name: ${studentName}; Age: ${studentAge}, Class: ${className}`
console.log("Intro: ", intro, temIntro)

// object
let student = {
    name: "Hai",
    age: 20,
    className: "ReactJS"
}
console.log("studentName: ", student.name)

// array
let ages = [20, 10, 30]
console.log("ages: ", ages)

// boolean
let isBoy = true; //false

/* instrucments */
// if - else if - else
let today = 5;
let isWetherGood = true
    // let isTuesday = (today === 3);
if ((today === 3 || today === 5) && isWetherGood) {
    console.log("Go to class!")
}
//  else if (today === 5) {
//     console.log("Go to class!")
// } 
else {
    console.log("Do not go to class!")
}

console.log('3 == "3"', 3 == "3")
console.log('3 === "3"', 3 === "3");
// switch case
let month = 9;
if (month === 1) {
    console.log("Jan")
} else if (month === 2) {
    console.log("Feb")
} else if (month === 3) {
    console.log("March")
} else {
    console.log("Dont know")
}

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Dont know");
}

switch (month) {
    case 1:
    case 3:
    case 5:
        console.log("31");
        break;
    case 2:
        console.log("28");
        break;
    case 4:
    case 6:
    case 9:
        console.log("30");
        break;
    default:
        console.log("Not valid")
}
// loop - for - while - do while
let begin = 1;
let end = 16;
for (let i = begin; i <= end; i = i + 1) {
    console.log("student " + i)
    if (i === 10) {
        console.log("Found");
        break;
    }
}
let n = end
    // for (let i = 0; i < n; i++) {
    //     // console.log("student " + (i + 1))
    //     for (let j = 0; j < n; j++) {
    //         // console.log(" i,j ", i, j);
    //         for (let k = 0; k < n; k++) {
    //             console.log(" i,j,k", i, j, k); // O(n^3)
    //         }
    //     }
    // }

let i = 0;
while (true) {
    if (i >= end) {
        break;
    }
    console.log("student " + i);
    i++;
}
i = 17;
do {
    console.log("Never mind, I stil do it")
} while (i < 16)

console.log("Please print me");

// get value from user input
let value = window.prompt("Enter a number", 0)
console.log("Value: ", value, typeof(value))

if (value % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}