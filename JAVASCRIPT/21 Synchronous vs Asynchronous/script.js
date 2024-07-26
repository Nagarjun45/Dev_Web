// ? Synchronous vs Asynchronous JS

// ? 1. Synchronous JS

// * It waits for each operation to complete, after that it executes the nexxt operation.

// ! EX:-

// function show(callback){
//     console.log("Nagarjun");
//     callback();
// }

// function geeky(){
//     console.log("How are You");
// }

// show(geeky);
// console.log("Bye Bye");

// ? 2. Asynchronous Js

// * It never waits for each operation to complete, rather it executes all operations in the first go only.
// ! EX:-

setTimeout(function(){
    console.log("I am Naga");
},3000);

console.log("End");