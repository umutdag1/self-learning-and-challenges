// 1. Way
const str = "Mr John Smith";
const newStr = str.replaceAll(new RegExp('\\s','g'),'%20');
console.log("Original : ",str);
console.log("Replaced : ",newStr);
// 2.Way
const newStr2 = str.split(new RegExp('\\s','g')).join("%20");
console.log("Original : ",str);
console.log("Replaced : ",newStr2);
/* Output : 
Original :  Mr John Smith
Replaced :  Mr%20John%20Smith
Original :  Mr John Smith
Replaced :  Mr%20John%20Smith
*/