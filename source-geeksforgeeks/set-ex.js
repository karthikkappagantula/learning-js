//set is a collection of items which are unique
var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);
set.add(1);
console.log(set);

// using Set.prototype.add(value)
// creating an empty set
var set1 = new Set();

// set contains 10, 20
set1.add(10);
set1.add(20);

// As this method returns
// the set object hence chanining 
// of add method can be done.
set1.add(30).add(40).add(50);

// prints 10, 20, 30, 40, 50
console.log(set1);

// using Set.prototype.delete(value)
// creating set it contains
// f, o , d, i, e
var set1 = new Set("foooodiiiieee");

// deleting e from the set
// it prints true
console.log(set1.delete('e'));

// set contains f, o, d, i
console.log(set1);

// deleting an element which is 
// not in the set
// prints false
console.log(set1.delete('g'));

set1.clear();
console.log(set1);

// Using Set.prototype.entries()
// creating set 
var set1 = new Set();

// adding element to the set
set1.add(50);
set1.add(30);
set1.add(40);
set1.add(20);
set1.add(10);

// using entries to get iterator
var getEntriesArry = set1.entries();

// each iterator is array of [value, value]
// prints [50, 50]
console.log(getEntriesArry.next().value);

// prints [30, 30]
console.log(getEntriesArry.next().value);

// prints [40, 40]
console.log(getEntriesArry.next().value);


// Using Set.prototype.has()
// creating set 
var set1 = new Set();

// adding element to the set
set1.add(50);
set1.add(30);
            
// prints true
console.log(set1.has(50));

// prints false
console.log(set1.has(10));

 // using Set.prototype[@@Iterator]()
var set1 = new Set(["sumit","sumit","amit","anish"]);

var getit = set1[Symbol.iterator]();

// Printing the values in the 
// iterator "getit" 

// prints {value: "sumit", done: false}
console.log(getit.next());

// prints {value: "amit", done: false}
console.log(getit.next());

// prints {value: "anish", done: false}
console.log(getit.next());

// prints {value: undefined, done: true}
console.log(getit.next());