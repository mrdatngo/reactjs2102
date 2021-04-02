let number = 8;

// {} <=> scope

function checkNumber() {
  // let number
  // console.log("number: ", number);
  // number = 5;
  let number = 3;
  // let studentName = "Tuan Anh";
  // console.log(studentName);
  if (number % 2 === 1) {
    return "ODD";
  } else {
    return "EVEN";
  }
}

// console.log(studentName);

// console.log("5 is", checkNumber(5));

// print 1 - n without for,while,dowhile

let n = 5;
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

function print(n) {
  if (n == 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

print(n);

// Use recursive, calculate total 1-n

// regular function
function calculate(n) {
  if (n === 1) return 1;
  return n + calculate(n - 1);
}

console.log("Total from 1 - n:", calculate(10));

//// 2 others to declare a funcion
// function expression

let hello = function () {
  console.log("Hello class!");
};

hello();

// arrow function - (fat arrow)
let checkNumberA = (number) => (number % 2 === 1 ? "ODD" : "EVEN");
console.log(checkNumberA(6));

//// number handler
let index = 1;
// console.log(index++);
// console.log(++index);
// console.log(index);
// for (var i = 0; i <= n; ++i) {
//   console.log("I: ", i);
// }
let result = index + ++index + index++ + index;
console.log("result: ", result);

index--;
--index;
// index = index + 10 <=> index += 10 (/= *= -=)

function getInputNumber() {
  let number = 0;
  do {
    let numberStr = window.prompt("Enter a number: ", 0);
    // number = parseInt(numberStr);
    // number = parseFloat(numberStr);
    number = Number(numberStr);
  } while (Number.isNaN(number));
  // let strNumber = number + ""; // or number.toString()
  return number;
}

// console.log(getInputNumber());
console.log("floor(1.5)", Math.floor(1.5));
console.log("ceil(1.5)", Math.ceil(1.5));
console.log("round(1.5)", Math.round(1.5));
// random
console.log("random()", Math.random());

// 0 <= Math.random() < 1
function rollADice() {
  return Math.ceil(Math.random() * 6);
}

function randomFromTo(from, to) {
  // return [from,to]
  // return from - 1 + Math.ceil(Math.random() * (to - from + 1));
  return from + Math.floor(Math.random() * (to - from + 1));
}

console.log("Roll a dice: ", rollADice());
console.log("random(10,15)", randomFromTo(10, 15));

//// string handler
let studentName = "Dinh\tDai";
studentName = "Vo \n" + studentName;
console.log("studentName", studentName);

studentName = "Vo Vo Dinh Dai";
console.log("studentName.length", studentName.length);
console.log("studentName.toUpperCase()", studentName.toUpperCase());
console.log("studentName.toLowerCase()", studentName.toLowerCase());
console.log("studentName.charAt(3)", studentName.charAt(3));
console.log("studentName.indexOf('Dinh')", studentName.indexOf("Dinh"));
console.log("studentName.indexOf('Dinh2')", studentName.indexOf("Dinh2"));
console.log("studentName.lastIndexOf('D')", studentName.lastIndexOf("D"));
console.log("studentName.indexOf('D')", studentName.indexOf("D"));
console.log("studentName.slice(3)", studentName.slice(3));
console.log("studentName.slice(3, 7)", studentName.slice(3, 7));
console.log("studentName.substring(3)", studentName.substring(3));
console.log("studentName.substring(3, 7)", studentName.substring(3, 7));
console.log("studentName.substr(3)", studentName.substr(3));
console.log("studentName.substr(3, 7)", studentName.substr(3, 7)); // 7 is count character want to get
console.log("studentName.replace('Vo', 'Vu')", studentName.replace("Vo", "Vu"));
console.log(
  "studentName.replace('Vo', 'Vu')",
  studentName.replaceAll("Vo", "Vu")
);

let userName = "tran tuAn anH";
// normalize userName to people name => Tran Tuan Anh
function normalizeName(userName) {
  // coding here....
  userName = userName.toLowerCase();
  console.log("userName", userName);
  for (let i = 0; i < userName.length; i++) {
    if (i == 0 || userName.charAt(i - 1) == " ") {
      // userName =
      //   userName.slice(0, i) +
      //   userName.charAt(i).toUpperCase() +
      //   userName.slice(i + 1);
      userName =
        userName.slice(0, i) +
        userName[i].toUpperCase() +
        userName.slice(i + 1);
    }
  }
  return userName;
}

// replace Tuan => Vu without replace/replaceAll
function replaceName(userName) {
  // coding here....
  return userName;
}

console.log("normalize from ", userName, "to", normalizeName(userName));
userName = normalizeName(userName);
console.log("replaceName: ", replaceName(userName));
