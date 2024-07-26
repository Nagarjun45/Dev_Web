// ? JS Class

// * A JS class is a blueprint for creating object.
// * A class encapsulates data and functions that manipulate data.
// * ECMAScript 2015, also known as ES6, Introduced JS classes.
// * JS classes are templates for JS Objects.
// * Use the keyword "class" to create class.
// * Always add a method named constructor().

// ! Syntax

class className{
    constructor(){}
}

// Example
class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford",2014);
const myCar2 = new Car("Audi",2019);

console.log(myCar1.name);

// ? The Constructor Method.

// * The constructor method is called automatically when a new object is created.

// ! The constructor method is a special method:

// * It has to have the exact name "constructor"
// * It is executed automatically when a new object is created
// * It is used to initialize object properties
// * If you do not define a constructor method, JavaScript will add an empty constructor method.


// ? Class Methods
// ! Syntax

// class ClassName {
//   constructor() {}
//   method_1() {}
//   method_2() {}
//   method_3() {}
// }

// With Constructor
class Mobile {
    constructor(model_no){
        this.model = model_no;
    }
    show(){
        return this.model + " Price Rs. 3000";
    }
}
var nokia = new Mobile("Lumia");
console.log(nokia.show());


// Without Constructor

class sPhone{
    display(){
        return "My NAme is Nagarjun"
    }
}

var sam = new sPhone();
console.log(sam.display());