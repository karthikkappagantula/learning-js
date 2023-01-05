//used to identify object properties. kind of hidden but not technically so its not so useful
var id = Symbol();
var id1 = Symbol("My Id");
var id2 = Symbol("My Id");
console.log(id);
console.log(id1.toString);
console.log(id1 === id2);


//use Symbol.for to use same Symbol
var id = Symbol.for("test");
var id1 = Symbol.for("test");
console.log(id === id1);