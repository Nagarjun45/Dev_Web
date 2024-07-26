// ? Prototype
// * JS works on Bottom TO Top approach when it comes to accessing values.

// * Js mein jab aap koi bhi function banate ho chahe wo general function ho ya constructor function ho uske hamesha 2 objects banate hai.

// ! 1. Function Object
// ! 2. Prototype object

// * Prototype object can be accessed using function_name.prototype

function Mobile (){

}
// Iske 2 objects crteate honge
var lg = new Mobile();
// Js Engine will create another object for lg.


// todo:- If we going to access a value from function.
// function Mobile(){

// }
// var lg = new Mobile();
// console.log(lg.a); //Expected Output:- Undefined

//? yaha sab apne apne object create honge phir a ki value ko wo apne lg object mein dhundega agar waha usko value nahi mili to wo function ke prototype mein dhundega agar waha par bhi value nahi mili to wo finally Undefined output dega.

// todo:- If we give value of a in function
// function Mobile(){
//     this.a = 10;
// }
// var lg = new Mobile();
// console.log(lg.a); //Expected Output:- 10

// ? Yaha Usko apne object mein value mil gayi to usne output 10 de diya

// todo:- if we give value in the function prototype.

// function Mobile(){
// }
// Mobile.prototype.a = 10;
// var lg = new Mobile();
// console.log(lg.a); //Expected Output:- 10

// ? Is case usko apne object mein value nahi milegi to wo function ke prototype mein check karega yaha humne function prototype mein value di hai isley hume output 10 mil gaya.


// todo:- if we give value to both

function Mobile(){
    this.a = 20;
}
Mobile.prototype.a = 10;
var lg = new Mobile();
console.log(lg.a); //Expected Output:- 20

// ? Yaha lg ko apne hi object mein value mil jati hai to wo aage proceed nahi karega aur hume 10 ki jagah output 20 milega.