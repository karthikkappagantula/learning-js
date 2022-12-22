//creating arrays
var House = [];  //method1
var House = new Array();  //method2


var house = new Array(10, 20, 30, 40, 50);
var house1 = new Array(5);
var home = new Array("1BHK");


console.log(house[0]);
console.log("array length of house::" + house.length);

for (var i = 0; i < house.length; i++)
    console.log(house[i]);

//add elements to end
home.push("2BHK");
home.push("3BHK");
home.push("Villa");
home.unshift("No Home"); //add elements to start
for (var i = 0; i < home.length; i++) {
    console.log(home[i]);
}

//remove elements from end
home.pop();
home.pop();
home.shift(); //remove element from start
for (var i = 0; i < home.length; i++) {
    console.log(home[i]);
}

// array splice.. helps with replacing elements
var num_arr = [1, 2, 3, 4, 5];
var str_arr = ["a", "b", "c", "d"];
num_arr.splice(1, 3); //deletes 3 elements starting from 1
console.log(num_arr);

num_arr.splice(1, 0, 10, 20, 30);  // does not delete since 2nd parm is 0. instead adds the three values in the position starting at 1.
console.log(num_arr);