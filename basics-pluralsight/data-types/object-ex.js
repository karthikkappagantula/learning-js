
let person = {
    name: 'karthik',
    age: 39,
    showMessage: function() {
        console.log(this.name);
    }
};

console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.country); //displays undefined
person.country = 'india';
console.log(person.country); //displays the value
console.log(typeof person.showMessage);
person.showMessage();