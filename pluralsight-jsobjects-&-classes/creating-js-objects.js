//create object using object literals
let person = {
    firstName: 'Karthik',
    lastName: 'Kappagantula',
    isIndian() { return true; } //you can create functions this way
};
console.log(person.firstName);
console.log(person.lastName);

//you can add properties to already existing object defined
person.age = 39;
person.isAdult = function() {
    return this.age >= 18;
}
console.log(person);
console.log(person.isAdult());

//inspecting objects
console.log("-------> inspecting objects")
console.log(Object.keys(person));
for (let propertyName in person) {
    console.log(propertyName);
    console.log(person[propertyName]); // or person.propertyName
}

//equality check. mostly use ===. also Object.is(ob1, ob2) works, but less commonly used.
// == is not type safe. so 42 == '42' results true
console.log("== tests");
console.log(42 == '42');

// === is type-safe, concise, NaN not equal to Nan, +0 equals -0
console.log("=== tests");
console.log("42" === 42); //results false as type is checked
console.log(42 === 42);
console.log(NaN === NaN);
console.log(+0 === -0);

//Object.is() is type-safe, but verbose. NaN equals NaN, +0 does not equal -0
console.log("=== Object.is() tests");
console.log(Object.is("42",42)); //results false as type is checked
console.log(Object.is(42, 42));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));

// if two objects are equal, it means they refers to same object.

//creating a new object from existing object using Object.assign
console.log("----> Object.assign() tests");
let person2 = {};
Object.assign(person2, person);
console.log(person2);
console.log(person === person2); //returns false as they represent different objects in memory
//Object.assign also concats 
console.log("----> concat using Object.assign()")
let healthStats = {
    height : 60,
    weight : 150,
};
Object.assign(person2, healthStats);
// Object.assign({}, person, healthStats); use this way if you don't want to mutate person object. here both person and healthStats are concated to empty object which can be returned.
console.log(person2);
console.log(person2.height);

//create objects using constructor functions - object oriented way
console.log("----> creating objects using constructor function");
function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
let personA = new Person("gayatri", "vemuri");
let personB = new Person("eeshan", "kappagantula");
let personC = new Person("advait", "kappagantula");
console.log(personA);
console.log(personB);
console.log(personC);

//create objects using Object.create() function ..very verbose and not preferred.
console.log("----> creating objects using Object.create() function");
let personZ = Object.create(
    Object.prototype, 
    {
        firstName: {value: 'abc', enumerable: true, writable: true, configurable: true},
        lastName: {value: 'xyz', enumerable: true, writable: true, configurable: true},
    }
);
console.log(personZ);