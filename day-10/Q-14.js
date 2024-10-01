//Define a function called calculateArea that calculates the area of a rectangle given its length and width as inputs. Return the area.


function calculateArea(length, width) {
    // Compute the area of the rectangle
    const area = length * width;
    
    // Return the computed area
    return area;
}
// Example inputs
const length = 4;
const width = 5;

// Calculate the area
const area = calculateArea(length, width);

console.log(`The area of the rectangle is ${area}`);
