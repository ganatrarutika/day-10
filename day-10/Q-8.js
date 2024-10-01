/*Write a function named calculateArea that takes the radius of a circle as a parameter and returns the area of the circle. Use the formula for calculating the area of a circle (area = π * radius^2).*/


function calculateArea(radius){
    return Math.PI * radius * radius;
}
let area = calculateArea(2);
console.log(area);
