// ? Inheritance.

// * In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

// * The "extends" keyword is used in class declarations or in class expressions to create a class which is a child of another class.

// ! SYntax

// class Father{
    // 
// }
// class Son extends Father{
// 
// }


// * Inherit Built-in-objects :- Date, String, Array

//* Inheritance Without Constructor

// class Father{
//     showFMoney(){
//         return "Father Money";
//     }
// }

// class Son extends Father{
//     showSMoney (){
//         // return "Son Money";
//         console.log('Son Money');
//     }
// }

// var s = new Son();
// console.log(s.showFMoney());
// // console.log(s.showSMoney());
// s.showSMoney();

//* Inheritance With Constructor

// class Papa{
//     constructor(money){
//         this.Pmoney = money;
//     }
//     show(){
//         return this.Pmoney + " is the papa's Money.";
//     }
// }

// class Putra extends Papa{
//     disp(){
//         console.log("Putra Money");
//     }
// }

// var ss = new Putra(10000);
// console.log(ss.show());
// ss.disp();


// ? When Both Father and Son have constructor.

// * When both father and son has constructor method then we use super method to access the properties of father.
// * super() is used to initialize parent class constructor.
// * If there is a constructor present in subclass, it needs to first call super() before using any property.

//Example

class Father {
    constructor(money){
        this.Fmoney = money;
    }
    showFMoney(){
        return this.Fmoney + " is the father's money.";
    }
}

class Son extends Father{
    constructor(money){
        super(money);
    }
    showSMoney(){
        return "Son Money";
    }
}

var s = new Son(10000);
console.log(s.showFMoney());
console.log(s.showSMoney());


// ? Method Overriding
// * Same function name with different implementation.

class School{
    show(){
        return "Super Class";
    }
}

class Student extends School{
    show(){
        return "Sub Class";
    }
}

var sh = new Student();
console.log(sh.show()); // It Overrides super class output to sub class.