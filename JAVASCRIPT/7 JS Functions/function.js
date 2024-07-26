// ? Function

// * Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// * A JavaScript function is a block of code designed to perform a particular task.

// ! Syntax

function name(parameter1, parameter2,parameterN) {
  // code to be executed
}

// ? Function Declaration and Call.

function showMessage(){
    console.log("hello Naga");
}

// showMessage();
// showMessage();
// showMessage();

// ? Local variables.

// * We can not access local variable outside function.

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable
//   console.log(message);
// }
// showMessage(); // Hello, I'm JavaScript!
// console.log(message); // <-- Error! The variable is local to the function


// ? Outer variables.

// * A function can access an outer variable as well, for example:


// let msg = 'John';

// function showMsg(){
//     let value = "Save"
//     console.log(msg +" can "+ value +" anyone");
// }
// showMsg();
// console.log(msg);


// ? Parameters.

// function dispName(firstName,lastName){
//     console.log("I am "+firstName+" "+lastName);
// }
// dispName("Nagarjun","Honrao");

// * When you give one parameter and two arguments then it will print only first value.

// function disp(num){
//     console.log(num);
// }
// disp(10,20) //Expected Output:- 10

// * Three parameters and two arguments it will give output first two with values and last one as undefined.

// function disp1(a,b,c){
//     console.log(a+","+b+","+c);
// }
// disp1(10,20)


// ? Rest Parameters.

// ! Syntax

// function f_name(...args){
//     // Code block
// }
// f_name(values); //We can pass any Number of arguments


// function show(...args){
//     console.log(args);
//     console.log(typeof args);
// }
// show(10,20,30,40,50,60);

// ? Default Parameters.

// function disp2(a,b,c=1){
//     console.log(a+","+b+","+c);
// }
// disp2(5,2) //Expected Output:- 5,2,1


// * Arguments have highest priority than Parameters
// function disp3(a,b,c=1){
//     console.log(a+","+b+","+c);
// }
// disp3(5,2,3) //Expected Output:- 5,2,3


// * Default parameter always give on last if u give in between and u give less parametrs than arguments then it will give Undefined for others.
// function disp4(a,b=8,c){
//     console.log(a+","+b+","+c);
// }
// disp4(5,2) //Expected Output:- 5,2,Undefined


// ? Return Statement

// * The return statement ends function execution and specifies a value to be returned to the function caller.

// * We can return primitive values (such as Boolean, number, string, etc.) and Object types (such as functions, objects, arrays, etc.) by using the return statement.

// * We have to use an Array or Object to return multiple values from a function.


// function addNumbers(a, b) {
//   return a + b;
// }

// let sum = addNumbers(5, 3);
// console.log(sum); // Output: 8



// ? Function Expression.

// ! why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

// * The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

// * The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

// let sayHi = function() {
//   console.log("Hello");
// };
// sayHi();



// ? Function is a value.

// * The last line does not run the function, because there are no parentheses after sayHi.

function sayHi() {
  return "Hello";
}

console.log(sayHi); // shows the function code
// console.log(sayHi()); // Expected Value:- Hello


// ? Function Expression vs Function Declaration.

// * Function Declaration: a function, declared as a separate statement, in the main code flow:
// Function Declaration
// function sum(a, b) {
//   return a + b;
// }

// * Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
// Function Expression
// let sum = function(a, b) {
//   return a + b;
// };
  
// ? Anonymous Function.

// * It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// ! Syntax

// function (){};

// var func = function(){};
// func()

var func = function(){
    return "Hello Everyone"
}
let result = func();
console.log(result);


var foo = function(fName,lName){
    console.log("My Name is "+fName+" "+lName);
}
foo("Nagarjun","Honrao")



// * Passing Anonymous function as argument

function dips(fun){
    return fun();
}

console.log(dips(function(){return "Nagarjun";}));

// * Return an anonymous function

function res(a){
    return (function(b){return a+b;})
}

var af = res(10);
console.log(af(20));



// ? Arrow Function

// ! Syntax

// todo:- ()=>{Statements};

// todo:- let func = (arg1, arg2, ..., argN) => expression;

let myFun = ()=>{console.log("Hello Everybody");}
myFun();

let sum = (a,b)=>a+b;
// var rt = sum(10,4);
// console.log(rt);
console.log(sum(10,9));


// * If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n=>n*2;
console.log(double(5));

// * If there are no arguments, parentheses are empty, but they must be present:

let greet = ()=>console.log("Hello Naga");
greet();

// * Arrow functions can be used in the same way as Function Expressions. For instance, to dynamically create a function:

let age = 19;

let votable = age >18? ()=>"Can Vote":()=>"Can not Vote";
console.log(votable());


// ? Immediately Invoked Function Expression(IIFE)
// * IIFE is JS function that runs as soon as it defined 
// * It is also known as self executing anonymous function 

// ! Syntax

(function(){console.log("Hello JS");})();

(function(a,b){console.log(a+b);})(10,7);

