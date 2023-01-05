var name = "karthik";
var age = 39;
var place = "Chennai";

console.log("Hello " + name + ". It seems your age is " + age + " and you stay in " + place);
//using template literals and backticks. 
console.log(`Hello ${name}. It seems your age is ${age} and you stay in ${place}`);
//preserves line breaks/formatting
console.log(`Hello ${name}. 
It seems your age is ${age} and you stay in ${place}`);
//prefix with String.raw to print the string as is
