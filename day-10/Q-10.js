//Create a function named findFactorial that takes a positive integer as input and returns its factorial.


function findFactorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(findFactorial(5));  // This will log 120 (because 5! = 5 × 4 × 3 × 2 × 1 = 120)
