//you can access object properties using either dot or bracket notations.
//person.firstName or person['firstName'];
let person = {
    firstName: 'Karthik',
    lastName: 'Kappagantula',
    isIndian() { return true; } //you can create functions this way
};

//object properties can be configured 
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
//change the property to non-writable
Object.defineProperty(person, 'firstName', {writable: false});
console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
person.firstName = 'KSK';
console.log(person);
//you can freeze the object using Object.freeze(Object-property)

//get all properties using for..in loop
for (let propertyName in person) {
    console.log(propertyName + ":" + person[propertyName]); //here only bracket notation works. dot notation does not work.
}
//you can set the enumerable property to false that will make the object property not iterate or can JSON serialize the property.
//configurable property will permenantly ensure you can no longer change property of the object property


//property getters and setters. you can define get/set functions on object property
Object.defineProperty(person, 'fullName',
{
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        var nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
});
console.log("get function:" + person.fullName);
person.fullName = 'John Wick';
console.log("set function:" + person.fullName);

//delete property
delete person.firstName
console.log(person);
