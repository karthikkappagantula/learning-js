//indexOf()
const values = [1, 2, 3, 4];
console.log(values.indexOf(1));
console.log(values.indexOf(3));

//filter() - goes thru entire array and access each item for the condition in the function. here we are passing function to a method
const set = values.filter(function(item) {
    return item > 2;
});
console.log(set);

//find()
const found = values.find(function(item) {
    return item > 3;
});
console.log(found);