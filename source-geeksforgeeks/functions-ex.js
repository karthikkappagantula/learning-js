// Function definition
function welcomeMsg(name) {
    console.log("Hello " + name + " welcome to GeeksforGeeks");
 }
 
 // creating a variable
 var nameVal = "Admin";
 
 // calling the function
 welcomeMsg(nameVal);

var welcome = function(){
    return "Welcome to GfG";
  }

  var gfg = welcome();

  console.log(gfg);

  //named function
 function add(a, b){
    return a+b ;
  }
  console.log(add(5, 4));


//anonymous function
  var add = function(a, b){
    return a + b;
  }
  console.log(add(5, 4));

//nested functions
  function msg(firstName) {
    function hey() {
      console.log("Hey " + firstName);
    }

    return hey();
  }

  msg("Ravi");

//immediately invoked function expression
  let msg1 = (function() {
    return "Welcome to GfG" ;
  })();
  console.log(msg1);