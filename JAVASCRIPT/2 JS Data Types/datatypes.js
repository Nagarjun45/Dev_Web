// TODO:-  "A value in JavaScript is always of a certain type."

// TODO:- A Primitive(primitive value or primitive data types) is the data that is not an object and has no methods.

// ? There are 8 types of data types in JavaScript 
// * 1.Number 2.Bigint 3.string 4.Boolean 5.Null 6.Undefined 7.Objects and Symbols 8.Typeof operator.


// ? 1. Number 
// * The number type represents both integer and floating point numbers.
// * Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// console.log(1/0);  //Infinity
// console.log("Naga"/45); //NaN (Not a Number)
// console.log( NaN + 1 ); // NaN
// console.log( 3 * NaN ); // NaN
// console.log(NaN * 0); //NaN
// console.log(NaN**0); //1


// ? 2. BigInt
// * JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
//* To create a BigInt, append n to the end of an integer or call BigInt().
// *The JavaScript typeof a BigInt is "bigint".

// *With BigInt the total number of supported data types in JavaScript is 8:

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


// *Operators that can be used on a JavaScript Number can also be used on a BigInt.

// let x = 9007199254740995n;
// let y = 9007199254740995n;
// let z = x * y;
// console.log(z);

// *Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
// *A BigInt can not have decimals.

// var x = 5n;
// var y = x / 2;
// console.log(y);
// !Error: Cannot mix BigInt and other types, use explicit conversion.

// * After Conversion
// let m = 5n;
// let n = Number(m) / 2;
// console.log(n);

// *BigInt can also be written in hexadecimal, octal, or binary notation:

// let hex = 0x20000000000003n;
// let oct = 0o400000000000000003n;
// let bin = 0b100000000000000000000000000000000000000000000000000011n;

// * ES6 added max and min properties to the Number object:
// TODO:- MAX_SAFE_INTEGER
// TODO:- MIN_SAFE_INTEGER
// * Safe integers are all integers from -(253 - 1) to +(253 - 1).
// * This is safe: 9007199254740991. This is not safe: 9007199254740992.

// let x = Number.MAX_SAFE_INTEGER;
// let y = Number.MIN_SAFE_INTEGER;
// console.log(x);
// console.log(y);


// ? ES6 also added 2 new methods to the Number object:

// TODO:- Number.isInteger()
// TODO:- Number.isSafeInteger()

// * The Number.isInteger() method returns true if the argument is an integer.

// var a = Number.isInteger(10);
// var b = Number.isInteger(10.5);
// console.log(a);
// console.log(b);

// * A safe integer is an integer that can be exactly represented as a double precision number.
// * The Number.isSafeInteger() method returns true if the argument is a safe integer.

// var mn = Number.isSafeInteger(10);
// var mp = Number.isSafeInteger(12345678901234567890);
// console.log(mn);
// console.log(mp);

// ? 3. String

// * Strings are for storing text and Strings are written with quotes.
// * A JavaScript string is zero or more characters written inside quotes.

// let text = "Nagarjun Honrao";

// * Strings created with single or double quotes works the same. There is no difference between the two.

// let carName1 = "BMW S";  // Double quotes
// let carName2 = 'TATA NEXON';  // Single quotes

// * You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';
// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// ? Template Strings

// * Templates were introduced with ES6 (JavaScript 2016).
// * Templates are strings enclosed in backticks (`This is a template string`).
// * Templates allow single and double quotes inside a string:
// * Templates allow multiline strings:

// let text = `He's often called "Nagarjun"`;

// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(text);

// ? Escape Characters

//  TODO:- \" inserts a double quote in a string:

// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text);

//  TODO:- \' inserts a double quote in a string:

// let text= 'It\'s alright.';
// console.log(text);

// TODO:- \\ inserts a backslash in a string:

// let text = "The character \\ is called backslash.";
// console.log(text);


// ? 4. Boolean.

// * A JavaScript Boolean represents one of two values: true or false.

// * You can use the Boolean() function to find out if an expression (or a variable) is true:

// console.log(Boolean(10 > 9));
// console.log(10>9);

// TODO:- Everything With a "Value" is True:

// * EX:- 100, 3.14, -15, "Hello", "false", 7 + 1 + 3.14

// TODO:- Everything Without a "Value" is False:

// * EX:- 0, -0, Undefined, Empty String (""), NULL, NAN

// TODO:- When adding a number and a string, JavaScript will treat the number as a string.

// let x = 16 + "Volvo";
// let t = "Volvo" + 16;
// console.log(x);
// console.log(t);

// TODO:- JavaScript evaluates expressions from left to right. Different sequences can produce different results:

// let z = 16 + 4 + "Volvo"; // It will ADD numbers first then concat with string
// console.log(z);
// console.log(u);

// ? 5. NULL

// * null is an assignment value and It can be assigned to a variable as a representation of a no value.

let zx = null;
console.log(zx);
console.log(typeof zx);


// ? 6. Undefined

// * Undefined means a variable has been declared but has not yet been assigned value.

let c;
console.log(c);
console.log(typeof(c));

// ? Difference Between Null and Undefined 

console.log(null==undefined);
console.log(null===undefined);

// ? 7. Symbols

// * Symbol data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.

let sym = Symbol("Hello")
console.log(typeof(sym));
console.log(sym);


