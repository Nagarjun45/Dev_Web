// ? The “while” loop.
// * While the condition is truthy, the code from the loop body is executed.

// ! Syntax while loop

// while (condition) {
//   // code
//  // so-called "loop body"
// }

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   console.log(i);
//   i++;
// }


// * For instance, a shorter way to write while (i != 0) is while (i):

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   console.log(i);
//   i--;
// }

// * Curly braces are not required for a single-line body

// let i = 3;
// while (i) console.log(i--);;


// ? The “do…while” loop.

// * The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// ! Syntax

// do {
//   // loop body
// } while (condition);


// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// * This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.


// ? The “for” loop.

// * The for loop is more complex, but it’s also the most commonly used loop.

// ! Syntax

// for (begin; condition; step) {
//   // ... loop body ...
// }


// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//   console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
//   }
//   console.log(i); // error, no such variable


// let i = 0;

// for (i = 0; i < 3; i++) { // use an existing variable
//   console.log(i); // 0, 1, 2
// }

// console.log(i); // 3, visible, because declared outside of the loop


// ? Skipping parts
// * Any part of for can be skipped.

// let i = 0; // we have i already declared and assigned

// for (; i < 3; i++) { // no need for "begin"
//   console.log(i); // 0, 1, 2
// }

// * We can also remove the step part:

// let i = 0;

// for (; i < 3;) {
//   console.log(i++);
// }

// * We can actually remove everything, creating an infinite loop:

// for (;;) {
//   // repeats without limits
// }



// ? break statement

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
//   console.log(i); // Expected Output :- 0 1 2 
  i = i + 1;
//   console.log(i); // Expected Output :- 0 1 2 3
}

// console.log(i);
// Expected output: 3


// ? continue statement

let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
console.log(typeof text);
// Expected output: "012456789"



// let txt = '';

// for (let i = 0; i<15; i++){
//     if (i===3){
//         continue;
//     }
//     txt+=i;
// }
// console.log(txt);