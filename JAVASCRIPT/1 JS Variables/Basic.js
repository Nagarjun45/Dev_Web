// ? Variables are containers for storing values.

// TODO:- JavaScript have 3 types of variables 1.var 2.let 3.const

 
// * For Var keyword

// Declare varible
var msg;  

// Initialize Value to it

msg = "hello"
// ? The string is now saved into the memory area associated with the variable.

var msg = 'Hello'; // ? define the variable and assign the value


// ? Declare Multiple variables in one line.

var user = 'John', age = 25, msg = 'Hello';

// ? Well Organised way
var user = 'John'
var age = 25
var msg = 'Hello'

// ? We can write Multiline way.

var user = 'John',
    age = 25,
    msg1 = 'Hello'

// console.log(msg1);

// ? Another way to write.

var user = 'John'
    ,age = 25
    ,msg2 = 'Hello'

// console.log(msg2);


// ? JavaScript had Global Scope and Function Scope.

// 1.Global Scope:- var
// 2. Function SCope:- let, const

// * For let keyword

// ? Variables defined with let can not be redeclared.

// let value = 20;
// let value = 22;

// ! SyntaxError: Identifier 'value' has already been declared.
// console.log(value);

// ? Variables defined with var can be redeclared.

// var value1 = 20;
// var value1 = 22;
// Output :- 22
// console.log(value1); 


// ? Declaration of var and let with same variable is not allowed.
// var x = 2;   // Allowed
// let x = 3;   // Not allowed
// ! SyntaxError


// ? There are two limitations on variable names in JavaScript:
// * 1. The name must contain only letters, digits, or the symbols $ and _.
// * 2. The first character must not be a digit.

// let $ = 10;
// let _ = 20;

// console.log($);
// console.log(mg_);



// * For Const Keyword.

// ? To declare a constant (unchanging) variable, use const instead of let.

const myBirthDay = "12-03-1997";

// ? const doesn't allowed to re-assign the value.

// const myBirthDay = "12-04-1996";
// ! SyntaxError: Identifier 'myBirthDay' has already been declared
// console.log(myBirthDay);


// *  Uppercase constants :- difficult values ko yaad rakhne ke liye hum Uppercases ka use kar sakte hai.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00



