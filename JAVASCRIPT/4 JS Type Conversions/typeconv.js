// ? JS Type Conversions

// * 1.Converting Strings to Numbers
// * 2.Converting Numbers to Strings
// * 3.Converting Dates to Numbers
// * 4.Converting Numbers to Dates
// * 5.Converting Booleans to Numbers
// * 6.Converting Numbers to Booleans


// ? 1.Converting Strings to Numbers.

// * The global method Number() converts a variable (or a value) into a number.

Number("3.14") //3.14
Number(Math.PI) //3.141592653589793
Number(" ") //0
Number("") //0

Number("99 88") //NaN
Number("John") //NaN

// ? 2.Converting Numbers to Strings.

String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression


// ? 3.Converting Dates to Numbers.

d = new Date();
Number(d)          // returns 1404568027739


// ? 4. Converting Dates to Strings

// * The global method String() can convert dates to strings.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"


// ? 5.Converting Booleans to Numbers

Number(false)     // returns 0
Number(true)      // returns 1


// ? 6. Converting Booleans to Strings.

String(false)      // returns "false"
String(true)       // returns "true"

// * The Boolean method toString() does the same.
false.toString()   // returns "false"
true.toString()    // returns "true"


// ? Automatic Type Conversion

// * When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

// * The result is not always what you expect:

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

