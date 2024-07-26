// ? 1. toString() method in number.

// * This method returns a number as a string in other words it converts number into string.
// * We can use this method to output numbers as hexadecimal(16), Octal(8), binary(2).

// ! Syntax
// toString();

var a = 10;
console.log(a.toString());
console.log(typeof a.toString());
console.log(a.toString(2));
console.log(a.toString(16));

// ? 2. toExponential() method in number.

// * This method converts a number into an exponential notation.
// ! Syntax

// variable_name.toExponential(y);

// Where, 
// y = integer between 0 to 20.
// y = Represents the Node. oof digits in the notation after the decimal Point. 
// y = If omitted, it is set to as many digits as necessary to represents the value

var ex = 58975.984545;
console.log(ex.toExponential());
console.log(ex.toExponential(2));

// ? 3. toFixed() method in number.

// * This method converts a number into a string, keeping a specified no. of decimals also it rounds the decimal
// * If the desired no. of decimals are higher than the actual number, nulls are added to create the desired decimal length.
// ! Syntax
// a.toFixed(y);

// Where y is the no. of digits after the decimal point. Default is 0. (No Digits after the decimal point).

var a = 16.65823;
console.log(a.toFixed()); // It rounds off the value
console.log(a.toFixed(2));

// ? 4. toPrecision() method in a number.
// * This method formats a number to a specified length.
// * A decimal points and nulls are added (if needed), to create the specified length.

// ! Syntax

// variable_name.toPrecision(y);

// Where y is the no. of digits. 
// Yaha y matlab total digits as output dega.

var b = 19.8756;
console.log(b.toPrecision());
console.log(b.toPrecision(2));
console.log(b.toPrecision(4));


// ? 5. Number.isInteger() method in number.
// * This method determines whether a value an integer.
// * this method returns true if the value is of the type number and an integer, otherwise it returns false.

console.log(Number.isInteger()); //false
console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100)); //true
console.log(Number.isInteger(-100)); //true
console.log(Number.isInteger(100.45)); //false
console.log(Number.isInteger(200-100)); //true

// ? Global JS Methods

// ? 1. Number() Method.

// * It converts the object argument to a number that represents the object's value
// * If the value can't be converted to a legal number, NaN is returned.
// * If the parameter is a Date Object, the Number() function returns the no. of milliseconds since midnight January 1, 1970 UTC.

console.log(Number(true));
console.log(Number("100"));
console.log(Number(100/"hello"));
var f = new Date();
console.log(f);

console.log("--------------------------------------------------");
// ? 2. parseInt() method.
// * This function parses a string and returns an integer.
// ! Syntax
// parseInt(string,radix);

console.log(parseInt("10")); //10
console.log(parseInt("12.00")); //12
console.log(parseInt("15.45")); //15
console.log(parseInt("10 20 30")); //10
console.log(parseInt(" 90 ")); //90
console.log(parseInt("10 years")); //10
console.log(parseInt("years 10")); //NaN
console.log(parseInt("020")); //20
console.log(parseInt("12",8)); //10
console.log(parseInt("0X12")); //18


// ? 2. parseFloat() method.
// * It is same as parseInt but here float number print as same as original.

console.log(parseFloat("15.45")); //15.45



// ? MATH Object in JavaScript.

// ? 1. Min and Max Method in JS.


console.log("Minium Number :-",Math.min(50,5,90,6,100));
console.log("Maximum Number :-",Math.max(50,5,90,6,100));

console.log("--------------------Floor Method-------------------------------");

// ? 2. Floor method in Js.
// * This method rounds a number downwards to the nearest integer and returns the result

console.log(Math.floor(2.1)); //2
console.log(Math.floor(6.65)); //6
console.log(Math.floor(0.4)); //0
console.log(Math.floor(0.6)); //0
console.log(Math.floor(-2.1)); //-3
console.log(Math.floor(-6.65)); //-7


console.log("--------------------Round Method-------------------------------");

// ? 3. round() method in JS.
// * This method rounds a number to the nearest integer.
// * EX:- 6.4 will be rounded down, 6.5 will be rounded up.

console.log(Math.round(2.1)); //2
console.log(Math.round(6.4)); //6
console.log(Math.round(6.5)); //7
console.log(Math.round(-2.1)); //-2
console.log(Math.round(-6.5)); //-6

// ? Generate Random Numbers

// ! Syntax
// Math.random();

console.log(Math.random());
console.log(Math.random()*100+1);
console.log(Math.random()*1000);

var x = Math.floor(Math.random()*1000); //It will give whole number
console.log(x);