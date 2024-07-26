// ? Conditional Statements.

// * Conditional statements are used to perform different actions based on different conditions.

// * 1. Use if to specify a block of code to be executed, if a specified condition is true
// * 2. Use else to specify a block of code to be executed, if the same condition is false
// * 3. Use else if to specify a new condition to test, if the first condition is false
// * 4. Use switch to specify many alternative blocks of code to be executed



// ! Syntax if

if (condition) {
      //block of code to be executed if the condition is true
}

// const hour = 19;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// }

// ! Syntax if-else

if (condition) {
  //  block of code to be executed if the condition is true
} else {
    //  block of code to be executed if the condition is false
}


// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }
// console.log(greeting);

// ! Syntax elif

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

// var time = 11;
// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
// console.log(greeting);


// ! Syntax Switch Case

// * The switch statement is used to perform different actions based on different conditions.

// * The switch statement evaluates an expression, compare its result with case values, and executes the statement associated with the matching case values.


switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


// ? This is how it works:

// * 1. The switch expression is evaluated once.
// * 2. The value of the expression is compared with the values of each case.
// * 3. If there is a match, the associated block of code is executed.
// * 4. If there is no match, the default code block is executed.

// * Switch cases use strict comparison (===).

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);


// ? The default Keyword

// * The default keyword specifies the code to run if there is no case match.
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);