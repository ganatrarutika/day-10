//Create a function named isEven that takes an integer as input and returns true if it's even, and false otherwise.


function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));  // This will log true (because 4 is even)
console.log(isEven(7));  // This will log false (because 7 is odd)