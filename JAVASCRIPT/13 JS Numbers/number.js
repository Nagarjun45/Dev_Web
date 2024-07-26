// ? Number 
// * The number type represents both integer and floating point numbers.
// * Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// console.log(1/0);  //Infinity
// console.log("Naga"/45); //NaN (Not a Number)
// console.log( NaN + 1 ); // NaN
// console.log( 3 * NaN ); // NaN
// console.log(NaN * 0); //NaN
// console.log(NaN**0); //1


// ? NaN in JS.
// * The NaN property represents "Not-a-Number" value.
// * This property indicates that a value is not a legal number.
// * NaN never compare equal to anything, even itself.
// * The NaN is the same as the Number.NaN property.

var a = 10;
var b = "Hello";
console.log(a/b);

// ? Global isNaN() method in Js.

// * This function is used to determine whether a value is an illegal number(NaN).
// * This function returns True if the value equates to NaN otherwise it returns false.
// * This function is different from the number specific Number.isNaN()
// * The global isNaN() function, converts the tested value to a number, then tests it.

// ! Syntax
// isNaN();

var a = "50";
var b = 10;
var c = 20;
var d = "Hello";

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(d));