const { circleArea, circleCircumference } = require('./modules/circle'); // Importing Module via Object Destructing

const RADIUS = 5; // Declaring RADIUS as 5

const circleAreaResult = circleArea(RADIUS); // Getting Result of Circle Area By Calling circleAreaResult with RADIUS
const circleCircumferenceResult = circleCircumference(RADIUS); // Getting Result of Circle Circumference By Calling circleCircumferenceResult with RADIUS

console.log(`Result (r=${RADIUS}) :`, circleAreaResult, circleCircumferenceResult); // Print the Results
