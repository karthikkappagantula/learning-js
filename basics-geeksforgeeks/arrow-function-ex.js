function myFunction(){
    let a = 5, b = 4;
    return a+b;
  }
  console.log(myFunction());

//arrow function
const myFunction1 = () =>{
  let a = 5, b = 4;
  return a+b;
}
console.log(myFunction1());

const myFunction2 = num => num*num;
// Equivalent to const myFunction = (num) =>{ return num*num; }

console.log(myFunction2(4));