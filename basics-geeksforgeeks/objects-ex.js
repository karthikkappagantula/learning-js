//one way
let school = {
    name: 'School',
    location: 'Mumbai',
    established: '1981'
}

console.log(school.name);
console.log(school.location);
console.log(school.established);

//second way
const school2 = new Object();
school2.name = 'Another School';
school2.location = 'Delhi';
school2.established = '1951';

console.log(school2.name);
console.log(school2.location);
console.log(school2.established);

//constructor   
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}
let cat1 = new Vehicle('mycar', 'cc1984', '2022', 'red');
console.log(cat1.make);
console.log(cat1.model);

//access object properties
//dot notation is what we have seen above. there's another way to access, which is bracket notation
console.log(cat1['make']);

//iterating over all keys of an object
let person = {
    gender : "male"
}

var person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
// Output : name, age, nationality 
// and gender
    console.log(key); 
} 

//deleting object properties
delete person1.nationality;
console.log(person1.nationality);