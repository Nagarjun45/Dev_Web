// ? Date Object In JS.

// * The Date object provides a sophisticated set of methods for manipulating dats and times
// * Date objects are created with new Date() constructor. Date objects created by programmers are static. They do not contain a ticking clock.
// ! Syntax

// todo:-  new Date();
// todo:-  new Date(milliseconds);
// todo:-  new Date(year,month,day,hours,minutes,seconds,milliseconds);
// todo:-  new Date(dateString);

// ? Creating date object using Date().

// var tarikh = new Date();
// console.log(tarikh);

// ? Creating date object using Date(milliseconds).
// * It Creates a new date object as January 1, 1970, 00:00:00 UTC.

// var tarikh1 = new Date(8640000);
// console.log(tarikh1);

// ? Creating date object using Date(year,month,day,hours,minutes,seconds,milliseconds).
// * It creates object with the date specified by the integer values for the given values and you can omit some of the arguments.

// var tarikh2 = new Date(2.18,4,25,9,45,35,0);
// console.log(tarikh2);

// ? Creating Date Object using Date(datestring) in JS.
// * It creates a new date object from a date string.

// var tarikh3 = new Date("May 12, 2018 10:16:05");
// console.log(tarikh3);

// ? Short Date
// * Short dates are written with an "MM/DD/YYYY" format.

// var tarikh4 = new Date("06/25/2018");
// console.log(tarikh4);

// ? Long Date
// * Long dates are most often written with a "MMM DD YYYY" format.
// * Month and day can be in any order.
// * Month can be written in Full or abbrevation(short form).
// * If you write "June,21,2018" commas are ignored and Names are case sensitive.

var tarikh5 = new Date("March 13 1997");
console.log(tarikh5);


var tak = new Date('2012-01-01 GMT');
console.log(tak);

var doo = new Date("2011-09-24");
console.log(doo.toUTCString());