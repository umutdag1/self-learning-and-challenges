const PI = Math.PI; // Declaring PI 

const circleArea = radius => PI * (radius ** 2); // Declaring circleArea Function That Calculates the Circle Area as its radius
const circleCircumference = radius => 2 * radius * PI; // Declaring circleCircumference Function That Calculates the Circle Circumference as its radius


// Opening them to OutWorld
module.exports = {
	circleArea,
	circleCircumference
};