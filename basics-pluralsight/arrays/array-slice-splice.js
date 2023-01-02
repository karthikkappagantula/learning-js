//slice()
const values = ['a', 'b', 'c'];
const newValues = values.slice(1, 2); //returns new array from start position 1 and end position 2(not included)
console.log(newValues);
console.log(values);

              
//splice() for deleting
const values1 = ['a', 'b', 'c'];
values1.splice(1, 0, 'foo'); //splice(start: number, deleteCount: number, ...items)(method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[]
console.log(values1);
