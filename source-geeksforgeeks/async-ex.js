console.log("Program Starts......");

setTimeout(() => {
    console.log("setTimeout execution....");
}, 0);

new Promise((resolve, reject) => {
    resolve("Promise resolved.....");
}).then((res) => console.log(res))
   .catch((error) => console.log(error));

console.log("Program Ends.....");