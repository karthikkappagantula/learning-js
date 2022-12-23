// add() function is called with arguments a, b
// and callback, callback will be executed just 
// after ending of add() function
function add(a, b , callback){
    let total = a + b
    console.log('The sum of ' + a + ' and ' + b + ' is ' + total);
    callback();
}
   
// disp() function is called just
// after the ending of add() function 
function disp(){
    console.log('This must be printed after addition');
}
   
// Calling add() function
add(5,6,disp);    

// add() function is called with arguments a, b
// and callback, callback will be executed just 
// after ending of add() function
function add(a, b , callback){
    let total = a + b
    console.log('The sum of ' + a + ' and ' + b + ' is ' + total);
    callback();
}
 
// add() function is called with arguments given below
add(5,6,function disp(){
console.log('This must be printed after addition.');
});