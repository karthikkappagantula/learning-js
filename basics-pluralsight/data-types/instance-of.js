//helps to test if an object is an instance of a class
let person = new Person("karthik", 39, "Chennai");
let anotherPerson = [1, 2, 3];
function Person(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
}
let date = new Date();

console.log(person instanceof Person);
console.log(anotherPerson instanceof Person);
console.log(date instanceof Date);