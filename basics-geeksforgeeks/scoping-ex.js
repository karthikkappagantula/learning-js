function foo() {
    if (true) {
        var x = '1';    // Exist in function scope
        const y = '2';  // Exist in block scope
        let z = '3';    // Exist in block scope
    }
    console.log(x);
    console.log(y);
    console.log(z);
}
foo();

function foo() {
    var x = '1';
    console.log('inside function: ', x);
}

foo();          // Inside function: 1
console.log(x); // Error: x is not defined 

// Global scope
var x = '1'
const y = '2'
let z = '3'

console.log(x);    // 1
console.log(y);    // 2
console.log(z);    // 3

function getNo() {
    console.log(x);   // x is accessible here
    console.log(y);   // y is accessible here
    console.log(z);   // z is accessible here
}
getNo();           // 1


let name = "Abhijit";
var sector = "Government";

{
  let name = "Souvik";
  
  // as `var` is NOT block scoped(globally s
  // coped here), it'll update the value
  var sector = "Private"; 
  console.log(name); //Souvik
  console.log(sector); //Private
}

console.log(name); //Abhijit
console.log(sector); //Private

let name0 = "Abhijit";
var sector = "Government";

function showDetails() {
  let name0 = "Souvik";

  // `var` is functionally scoped here,
  // so it'll create new reference with 
  // the given value for organization
  var sector = "Private";
  console.log(name0); // Souvik
  console.log(sector); // Private
}
showDetails();
console.log(name0); // Abhijit
console.log(sector); // Government


let name1 = "Abhijit";
var sector = "Government";

function showDetails() {
  let name1 = "Souvik";

  // `var` is functionally scoped here,
  // so it'll create new reference with 
  // the given value for organization
  var sector = "Private";
  console.log(name1); // Souvik
  console.log(sector); // Private
}
showDetails();
console.log(name1); // Abhijit
console.log(sector); // Government


// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined