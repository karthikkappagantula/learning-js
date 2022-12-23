const values = ['a' , 'b', 'c']; //any data type can go in to arrays and can be a mix as well. best practice is to use same data type
console.log(values);
console.log(values[0]);
console.log(typeof values);
console.log(Array.isArray(values));
console.log(values.length);
values.push('d'); //adds at end
console.log(values)
values.unshift('0'); //adds at beginning
console.log(values);
values.pop(); //removes from end
console.log(values);
values.shift(); //removes from beginning
console.log(values);