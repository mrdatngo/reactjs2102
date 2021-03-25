let number = prompt("Enter a number: ", 0);

console.log("Number: ", number);

if (number < 2) {
    console.log(number, "is not prime number");
} else {
    let check = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(number + " is prime");
    } else {
        console.log(number + " is not prime");
    }
}

let n = number;
// guide
while (n > 0) {
    console.log("n % 10", n % 10);
    n = parseInt(n / 10);
}
