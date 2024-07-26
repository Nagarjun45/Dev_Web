// ? 1. concat() arrays.

// * It is used to concat two or more arrays.
// ! Syntax
// new_array = old_array.concat(value1,value2,...)

//Example

var emp1 = ["Naga","Radha",45];
var new_emp = emp1.concat("Raj","Simran");
console.log(new_emp);
//It will not affect the original array.
console.log(emp1);


// ? 2. Join() method in arrays.

// * The join() method joins the elements of an array into a string and returns the string.
// * The elements will be seperated by a specified separator.
// * The default separator is comma(,).
// ! Syntax
// array_name.join(separator)

//Example

var emp = ["Naga","Radha","Vedant","shyam"]
console.log(emp.join()); //Default comma
console.log(emp.join("#"));
console.log(emp.join("."));


// ? 3. Reverse method in arrays.

// * Reverse method reverses the order of the elements in an array.
// !Syntax
// array_name.reverse();

console.log("Array Reverse :-",emp.reverse());

// ? 4. slice method in arrays.
// * It returns selected elements in an array, as a new array.
// * This method does not change the original array.
// ! Syntax
// array_name.slice(begin,end);

emp1 = ["Summo","Tummo","Rummo","Jhummo",45,16]
console.log(emp1.slice(1,4));


// ? 5. toString method in array.

// * This method returns a string containing the comma-separated values of the array.
// * This method is automaticcally invoked when you print an array.
// * It is equivalent to invoking join() method without any arguments.
// * The returned string will separate the elements in the array with comma(,).

// ! Syntax
// array_name.toString();

// Example
const students = ["Raj","Rahul","Naga","Radha","Ram"]
console.log(students.toString());

// ? 6. isArray method in array.

// * This method determines whether the passed value is an array or not.
// * This function returns True if the object is an array and false if not.

// ! Syntax
// Array.isArray();

//Examples

var result1 = Array.isArray(["Naga",45]);
console.log(result1); //true

var result2 = Array.isArray("I am Nagarjun");
console.log(result2); //false


// ? 7. splice() method in an array.
// * The splice() method changes the contents of an array by removing existing elements or adding new elements.
// * This method changes the original array.

// ! Syntax
// array_name.splice(start,deletecount,replacevalues);

// deletecount:- It is the no. of elements to delete beginning with index start.

var gmp = ["Naga","Dada","Radha","Ram","Sita","Shyam"]

// It will delete everthing after index 2.
// gmp.splice(2)
// console.log(gmp);

// gmp.splice(2,1);
// console.log(gmp); // It will delete only one element after index 2.

// gmp.splice(2,0,"Dell");
// console.log(gmp); // It will add Dell after index 2 without deleting any element.

// gmp.splice(2,2,"Kalki","Kali")
// console.log(gmp);

// ? 8. indexOf() method in an array.

// * This method allows to easily find the occurance of an item in an array.
// * If the item not found, it returns -1.
// * The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of an array.
// * If the item is present more than once, the indexOf() method returns the position of first occurance.
// ! Syntax

// var position = array_name.indexOf(item,start);

// Example

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 3);
// console.log(index);

let index = fruits.indexOf("Apple");
console.log(index); //first occurance



// ? 9. fill() method in an array.

// * This method fills all elements in an array with a static value.
// ! Syntax
// array_name.fill(value,start,end);

//Example

const gadi = ["BMW","TATA","Toyoto","TVS","Mahindra","Bajaj"];
// gadi.fill("Naga");
// console.log(gadi);

gadi.fill("Naga",1,3);
console.log(gadi);

var new_array = new Array(4).fill("Nagarjun")
// It will create new empty array with 4 empty elements.
console.log(new_array);



// ? 10. Unshift() method in array.

// * This method adds one or more elements to the beginning of an array and returns the new length of the array.
// * This method changes the length of an array.
// ! Syntax
// array_name.unshift(value1,value2,...);

var agile = ["TATA","SALT","TESLA","USA"];
// agile.unshift("Dell","HP"); //It will Add This two elements at start in array
// console.log(agile);
var agile_length = agile.unshift("DELL","HP"); // It will give the length of an array
console.log(agile_length);


// ? 11. push() method in array.
// * This method adds one or more elements to the end of an array and returns the length of array.
// * This method changes the length of an array.

// ! Syntax
// array_name.push(value1,value2,....);

//Example

var gang = ["Raja","Rama","Purv","Geeta"];
// gang.push("Naga","Radha");
// console.log(gang);

var gang_length = gang.push("Naga","Radha");
console.log(gang_length);


// ? 12. shift() method in array.

// * This method removes the first element from an array and returns that removed element.
// * this method changes the length of an array.
// ! Syntax
// array_name.shift();

// Example
var rang = ["Raja","Rama","Purv","Geeta"];
// rang.shift();
// console.log(rang); 

var rang_removed = rang.shift();
console.log(rang_removed);

// ? 13. pop() method in an array.
// * This method removes the last element from an array and returns that removed element.
// * This method changes the length of an array.
// ! Syntax
// array_name.pop();

//Example
var lang = ["Raja","Rama","Purv","Geeta"];
// lang.pop();
// console.log(lang);

var lang_removed = lang.pop();
console.log(lang_removed);
