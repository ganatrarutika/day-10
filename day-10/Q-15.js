//Write a function called findMax that takes two numbers as input and returns the maximum of the two.


function findMax(num1, num2) {
    // Compute the maximum of the two numbers
    return num1 > num2 ? num1 : num2;
}
// Example inputs
const number1 = 10;
const number2 = 7;

// Find the maximum number
const maxNumber = findMax(number1, number2);

console.log(`The maximum number is ${maxNumber}`);
