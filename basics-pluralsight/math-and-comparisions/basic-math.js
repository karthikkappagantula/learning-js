let price = 100;
let result;

console.log(price + 100); //addition 
console.log(price - 50);  //substraction
console.log(price ** 2);  //exponent
console.log(price / 10);  //division
console.log(price % 5);   //modulo
console.log(++price);     //increment by 1
console.log(--price);     //decrement by 1

//plus sign is overloaded. when used with strings it concatenates and performs addition when used with numeric.
console.log("price" + " is high"); //string concat
console.log(10 + 20); //numeric addition
console.log(20 + "10"); //js considers 10 as string and does concat.
console.log(20 + +"10"); //js converts the "10" to numeric here as there is a + sign before the string.


//assignment operators
console.log("assignment operators");
console.log(price += 100); //works similarly with all other math operators