/*Define two functions, double and square, where double doubles a number and square squares a number. Create a function named doubleSquare that takes a number as input, doubles it using the double function, and then squares the result using the square function.*/


// Function to double a number
function double(num) {
    return num * 2;
}

// Function to square a number
function square(num) {
    return num * num;
}

// Function to double a number and then square the result
function doubleSquare(num) {
    let doubled = double(num);
    return square(doubled);
}

let result = doubleSquare(3);
console.log(result);  // This will log 36 (because (3 * 2) ^ 2 = 6 ^ 2 = 36)


