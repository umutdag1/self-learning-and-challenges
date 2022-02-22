// Not needed to be Imported
const radius = process.argv[2] ? // Getting Command Prompt Third Param 
	process.argv[2] : // Which is in Second Position in an Arr
	0; // If It's not Defined, Then Assign to 0(Zero) as radius
const PI = Math.PI; // Getting PI

const circleArea = (r) => PI * r ** 2; // Calculating Circle Area and Getting Result

console.log(circleArea(radius));  // Print it to Console