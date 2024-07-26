// ? Js Class
// * A JS class is a blueprint for creating objects.
// * A class encapsulates data and functions that manipulate data.


var Mobile = function (model_no,sPrice){
    this.model = model_no;
    this.color = "White";
    this.price = 30000;
    // var price = 30000; //private property
    this.sp = sPrice;
    this.sellingPrice = function(){
        return this.model+" launched in special price of Rs."+this.sp+" Which has base price of Rs. "+this.price;
    }
};

var samsung = new Mobile("Galaxy Model",20000);
var nokia = new Mobile("Lumia Model",19000);
console.log(samsung.sellingPrice());
console.log(samsung.price);

// todo:- Private Properties 

// * By using var, let and const we can make private properties and methods.

// ? Prototype in JS 
// * Every Object has its own property called as prototype.
// * Prototype ka simple meaning hai parent/superclass.
// * Mostly prototype used for methods.
// ! Syntax

// * Classname.prototype.key = "Value";

var Mile = function(model_name){
    this.mdle = model_name;
    this.price = 23000;
}

var samsung = new Mile("Galaxy");
samsung.color = "white" //Only for particular
Mile.prototype.color = "black" //To give property to all members
var nokia = new Mile("Lumia");



console.log(samsung.color);
console.log(nokia.color);
