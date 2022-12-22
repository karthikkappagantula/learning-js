function showMessage() {
    console.log("hello");
}
console.log(typeof showMessage);
showMessage();

(function showMessage1() { console.log("hello again!!");})();  //immediately executed - IIFE 

//function expression
let fn = function () {
    console.log("this is function expression");
}
console.log(typeof fn);
fn();

//using function parameters
function displayMessage(message) {
    console.log(message);
}
displayMessage("hello from displayMessage");

//returning values from functions
let whatsName = function getName() {
    return "Karthik"; 
}
console.log(whatsName()); //if function does not return the value displayed is undefined