// ? 1. String length property

// str = "Nagarjun Honrao"
// console.log(str.length);

// ? 2. charAt() method in string.

// * This method returns the character at a specified index in a string
// ! Syntax

// str.charAt(position);

var str = "Nagarjun Honrao";
console.log(str.charAt(10));

// ? 3. charCodeAt() method in string.
// * returns the unicode of the character at a specified index
// ! syntax
// str.charCodeAt(position);

var str = "Nagarjun Honrao";
console.log(str.charCodeAt(10));

// ? 4. toUpperCase() and toLowerCase() method in String.

// * roUpperCase() converts string to upper case
// str.toUpperCase();

// * toLowerCase() converts string to lowercase
// str.toLowerCase();

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// ? 5. trim() method in string.
// * It removes whitespaces from both side of a string but not in between spaces.
// str.trim();

var str1 = "      Nagarjun    Honrao      "
console.log(str1.trim());

// ? 6. replace() method in string.
// * This method replaces a specified value with another value in a string.
// * It replaces only first match
// * It is a case sensitive.
// ! Syntax
// replace(old,new);

var str3 = "Nagarjun Honrao";
// var s = str.replace("Nagarjun","Vijay")
// console.log(s); // It will replace word

// * We can also replace a letter with letter.
var n = str.replace("N","H");
console.log(n);

// ? 7. split() methgod in a string.
// * This methods breaks the string into an array of substrings.
// * It returns new array.
// * It does not change the original string.
// * If (" ") is used as separator, the string is split between words.
// ! Syntax
// String.split(separator,limit);

var str4 = "Hi I am Nagarjun";
var arr = str4.split(" "); // It split in words.
var arr = str4.split(""); // It split in letters.
console.log(arr);


// ? 8. indexOf() method in a string.
// * This method takes a string argument and returns the index of the first occirance of the argument in the string.
// * If argument is not found the it returns -1.
// * This indexOf() method can't take powerful search values(RegEx).

// ! Syntax
// str.indexOf();

var str5 = "Hi I am Nagarjun";

console.log(str5.indexOf("a"));
console.log(str5.indexOf("a",3));
console.log(str5.indexOf("am"));


// ? 9. serach() method in a string.
// * This method searches a string for a specified value and returns the position of the match.
// * This method can't take a second start position argument.
// * We can use it for RegEx.

// ! Syntax
// str.search();

console.log(str5.search("N"));

// ? 10. slice() method in a string.

var str6 = "Hi Guys How are you all";
console.log(str.slice(5,15));

// ? 11. substring() method in a string.
// * It is similar to the slice() method but it can't hold negative values.
// * If start is greater then end, arguments are swapped : (4,1)=(1,4).
// * Start or end values less than 0, are trated as 0.
// ! Syntax

// string.substring(start,end);
const text = "Hi Summo Office karat raha jara"
let result = text.substring(4,1)
console.log(result);

let rs = text.substring(-6);
console.log(rs); // It will print whole string that is not output.


// // ? 12. substr() method in a string.

// var str7 = "Hi guys lets go for walk";
// // console.log(str.substr(8,8));

