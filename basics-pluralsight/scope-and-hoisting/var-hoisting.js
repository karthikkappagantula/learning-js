productId = 456;
console.log(productId); //here we are using the variable before its declared. this is called hoisting
var productId = 123;

//hoisting works well with function, but not variables. since js allows functions used as constants var will make the variables hoisted.
//best practice is to use let or const for variables.
