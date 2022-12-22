let person = {
    name: 'karthik',
    age: '39'
}

function incrementAge(person) {
    person.age++;
}

incrementAge(person);
console.log(person.age); //prints 40. here object is modified in the function. 