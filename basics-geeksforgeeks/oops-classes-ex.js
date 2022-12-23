// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
  
  console.log(bike1.name);    // Hayabusa
  console.log(bike2.maker);   // Kawasaki
  console.log(bike1.getDetails());


  // Defining class in a Traditional Way.
function Vehicle1(name,maker,engine){
    this.name = name,
    this.maker = maker,
    this.engine = engine
};

Vehicle1.prototype.getDetails = function(){
    console.log('The name of the bike is '+ this.name);
}

let bike1x = new Vehicle1('Hayabusa','Suzuki','1340cc');
let bike2x = new Vehicle1('Ninja','Kawasaki','998cc');

console.log(bike1x.name);
console.log(bike2x.maker);
console.log(bike1x.getDetails());