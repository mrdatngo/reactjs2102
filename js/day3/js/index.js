// Function

// var studentName = "Hiep";

function hello(studentName, className) {
    if (studentName && className) {
        console.log("Hello class");
        console.log("My name is ", studentName, ", class: ", className);
        return true;
    }
    return false;
}

// let check = hello("Hiep", "REACTJS2102");
// if (!check) {
//     // continue handle
//     console.log("Something went wrong on print Kha");
// }

let check = hello("Kha");
// console.log("check: ", check);
if (!check) {
    // continue handle
    console.log("Something went wrong on print Kha");
}

// hello();
// hello();

// write a function pass a number,
// and return true <=> number is prime, false <=> number is not prime
function isPrime(number) {
    if (number < 2) {
        return false;
    } else {
        let check = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check = false;
                break;
            }
        }
        return check;
    }
}

var value = prompt("Enter number:", 0);

check = isPrime(value);
if (check) {
    console.log(value, "is prime number");
} else {
    console.log(value, "is not prime number");
}
