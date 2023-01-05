
var person = {
    name: 'karthik',
    age: 39,
    showMessage: function() {
        console.log(this.name);
    }
};

//object destructuring
var {
    name: newName,
    age: newAge,
} = person;

console.log(newName);
console.log(newAge);