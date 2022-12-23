//Defining object using object literal
let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',

    //method
    getFunction : function(){
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction()); 
console.log(person.phone_number.landline);

//Defining object using constructor
//using a constructor
function person1(first_name,last_name){
   this.first_name = first_name;
   this.last_name = last_name;
}
//creating new instances of person object
let person1x = new person1('Mukul','Latiyan');
let person2x = new person1('Rahul','Avasthi');

console.log(person1x.first_name);
console.log(`${person2x.first_name} ${person2x.last_name}`);

//Using Object.create()
// Object.create() example a
// simple object with some properties
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I 
          studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul'; 

// Inherited properties can be overwritten
me.isStudying = true; 

me.printIntroduction(); 