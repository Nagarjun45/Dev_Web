// ? Javascript operators

// * Javascript operators are used to perform different types of mathematical and logical computations.

// TODO:- There are different types of JavaScript operators:

// * 1.Arithmetic Operators
// * 2.Assignment Operators
// * 3.Comparison Operators
// * 4.String Operators
// * 5.Logical Operators
// * 6.Bitwise Operators
// * 7.Ternary Operators
// * 8.Type Operators

// ? 1.Arithmetic Operators

// * Arithmetic Operators are used to perform arithmetic on numbers:

//todo:-  Operator	    Description
//todo:-    +	        Addition
//todo:-    -	        Subtraction
//todo:-    *	        Multiplication
//todo:-    **	        Exponentiation (ES2016)
//todo:-    /	        Division
//todo:-    %	        Modulus (Division Remainder)
//todo:-    ++	        Increment
//todo:-    --	        Decrement

// TODO:- Increment and Decrement Operators
// let m = 20;
// let n = 11;
// console.log("Pre-Increment Value is:- ",++m);
// console.log("After Pre-Increment Actual Value is:- ",m);
// console.log("Post-Increment Value is:- ",n++);
// console.log("After Post-Increment Actual Value is:- ",n);

// console.log("------------------------------------------------------");

// let a = 20;
// let b = 11;
// console.log("Pre-Decrement Value is:- ",--a);
// console.log("After Pre-Decrement Actual Value is:- ",a);
// console.log("Post-Decrement Value is:- ",b--);
// console.log("After Post-Decrement Actual Value is:- ",b);

// let s = 20;
// * s++ ke addition ki case mein value update hoke aage jayegi. 
// console.log(s++ + ++s);
// console.log(++s + s++);
// console.log(s);
// console.log(s++ + s++);

// ? 2.Assignment Operators.

// * Assignment operators assign values to JavaScript variables.

//TODO:- =      x = y	
//TODO:- +=	   x += y 
//TODO:- -=	   x -= y 
//TODO:- *=	   x *= y 
//TODO:- /=	   x /= y 
//TODO:- %=	   x %= y 
//TODO:- **=   	x **= y

//  x+=y =>  x = x+y


// ? 3.Comparison Operators

// * Comparison operators are used in logical statements to determine equality or difference between variables or values.

// * Comparison and Logical operators are used to test for true or false.

//*  ==	    equal to
//*  ===	equal value and equal type
//*  !=	    not equal
//*  !==	not equal value or not equal type
//*  >	    greater than
//*  <	    less than
//*  >=	    greater than or equal to
//*  <=	    less than or equal to


// ? 4.String Operators

// String Concatination
// String and Number Addition.
// Comparing Strings 

// ? 5.Logical Operators

// * Logical operators are used to determine the logic between variables or values.

// let x = 6;
// let y = 3;
//* Operator	Description	   Example	

//* &&	         and	       (x < 10 && y > 1) is true	           
//* ||	         or	           (x == 5 || y == 5) is false      	
//* !	         not	       !(x == y) is true          

// ? a. Logical AND (&&)

// A     B      A&&B
// 0     0       0
// 0     1       0
// 1     0       0
// 1     1       1

// todo:- 1. One of the statement is false(0) then whole statement is false(0).
// todo:- 2. If first statement is true(1) then check the second statement also.


// ? b. Logical AND (||)

// A     B      A||B
// 0     0       0
// 0     1       1
// 1     0       1
// 1     1       1

// todo:- 1. One of the statement is true(1) then whole statement is true(1).
// todo:- 2. If first statement is false(0) then check for the second statement also.


// ? 6.Bitwise Operators



// Operator         Name
// 
// &                AND
// |                OR
// ^                XOR
// ~                NOT
// <<               Zero Fill Left Shift
// >>               Signed Right Shift
// >>>              Zero Fill Right Shift


// ? a. Bitwise AND (&)

// * Sets each bit to 1 if both bits are 1.
// * When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
// Operation  	Result

// 0 & 0	      0
// 0 & 1	      0
// 1 & 0	      0
// 1 & 1	      1

// ? b. Bitwise OR (|)

// * When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1.

// Operation  	Result

// 0 & 0	      0
// 0 & 1	      1
// 1 & 0	      1
// 1 & 1	      1

// ? c. JavaScript (Zero Fill) Bitwise Left Shift (<<)

// * This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off.

// ? d. JavaScript (Sign Preserving) Bitwise Right Shift (>>)

// * This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.

// ? e. JavaScript (Zero Fill) Right Shift (>>>)

// * This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:




// ? 7.Ternary Operators

// * JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

// ! Syntax:-  variablename = (condition) ? value1:value2 

let age= 19;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);


// ? 8. The Nullish Coalescing Operator (??)


// * The ?? operator returns the first argument if it is not nullish (null or undefined).Otherwise it returns the second argument.

let name = null;
let text = "missing";
let result = name ?? text;

console.log(result);


// ? 9. The Optional Chaining Operator (?.)

// * The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);


// ? 10. Type Operators.

// Operator	    Description

// typeof	    Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

