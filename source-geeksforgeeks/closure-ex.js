// Explanation of closure
/* 1 */        function foo()
/* 2 */         {
/* 3 */             var b = 1;
/* 4 */             function inner(){
/* 5 */                 return b;
/* 6 */             }
/* 7 */             return inner;
/* 8 */         }
/* 9 */         var get_func_inner = foo();         

/* 10 */         console.log(get_func_inner());
/* 11 */         console.log(get_func_inner());
/* 12 */         console.log(get_func_inner());


function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
var get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));

// Define the closure
var rentPrice = function(initialRent) {
   var rent = initialRent;

    // Define private variables for
    // the closure
    return {
      getRent: function() {
        return console.log(rent);
      },
      incRent: function(amount) {
        rent += amount;
        console.log(rent);
      },
      decRent: function(amount) {
         rent -= amount;
         console.log(rent);
      }
    }
}

var Rent = rentPrice(8000);

// Access the private methods
Rent.incRent(2000);
Rent.decRent(1500);
Rent.decRent(1000); 
Rent.incRent(2000); 
Rent.getRent();