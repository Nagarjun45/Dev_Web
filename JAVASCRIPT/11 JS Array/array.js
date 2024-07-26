// ? Array in JS

// * Arrays are collection of data items stored under a single name.
// * JS Array is a data structure that allows you to store and organise multiple value within a single variable.
// * It is versatile and dynamic object.
// * It can hold various data types, including numbers, strings, objects and even other arrays.
// * Arrays Can create using the Array Constructor or using the shorthand array literal syntax ([]).
// * Arrays can dynamically grow or shrink in size as elements are added or removed.
// * Arrays return "object"


// ? Ways to write Array

//* Using Array Literal (Best For Use)
// ! Syntax

// let arrayName = [value1,value2,........,valuen]

// * Empty array
var emp = [];
emp[0] = "Naga"
emp[1] = "Ankur"
emp[2] = "Vedant"
emp[3] = 45;
console.log(emp);

// * By giving commas

var smp = [,,,,,,,]
console.log(smp); //Expected output:- [ <7 empty items> ]

var dmp = [,,,,,45,,,,79,,,]
console.log(dmp); 
//Expected Output:- [ <5 empty items>, 45, <3 empty items>, 79, <2 empty items> ]

// ?  Array Constructor method
// ! Syntax 
// var arrayName = new Array();



// ? Accessing, Modifying and Removing array in JS:-

var empl = ["Naga","Radha",45,"Rohit"];

// *Access

console.log(empl[1]);
console.log(empl[0]);
console.log(empl[4]); // Because we have till 3 index it will give undefined
console.log(empl[3]);

// * Modify
empl[2]="Rahul";
empl[1]="Dada"
console.log(empl);

// * Remove:- We use delet operator

delete empl[2];
console.log(empl);
// Exp Output:- [ 'Naga', 'Dada', <1 empty item>, 'Rohit' ]
console.log(empl[2]);
// Exp Output:- Undefined

// ? Length Property in array

// console.log("The Length of an given array :-",empl.length);
var len = empl.length;

// ? Iteration of an array using for loop

for (let i=0;i<len;i++){
    console.log(empl[i]);
}

// ? forEach() loop in JS
// * The forEach() method calls a function for each element in an array.
// * The forEach() method is not executed for empty elements.

// ! Syntax

// array.forEach(element => {
    
// });

// array.forEach(function(value,index,arr){});

console.log("----------------------------------------------------------");
var geek = ["Rahul","Naga","Rohit",45];

// geek.forEach(value=>{
//     console.log(value);
// });


geek.forEach(function(value,index){
    console.log(value +" "+index);
});


// ? for of loop in JS 
// * The JS for of statement loops through the values of an iterable object.
// * It lets you loop over iterable data structures such as arrays, strings, maps, nodelist and more.
// ! Syntax

// for (variable of iterable){
//     //Code Block
// }

const students = ["John","Naga","Jack","Vishal"];

for(let elements of students){
    console.log(elements);
}


const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text);



// ? for in loop in js.
// ! Syntax

// for (variable in array) {
//     code
// }

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt);



// ? Multi-dimensional Array

// * It is arras of array.
// * It can be 2D, 3D, 4D etc.

var game=[["Naga","Dada",45],[10,20,60],["Radha","Shyam","Ram",80]]

console.log(game[0][2]);
console.log(game[1][1]);
console.log(game[2][0]);
console.log(game[0][0]);
