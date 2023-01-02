// == is equal to and === is strict equal to. strict equality verifies the data type
let price = 100;
let result;

result = price;
console.log("using == " + (result == price));

result = price.toString();
console.log("using === " + (result === price));