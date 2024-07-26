// ? Objects

// * In Js, an Object is an unordered collection of key-value pairs.
// * Each key-value pair is called a "Property"
// * A property's vaslue can be a function, in this case the property is called "Method"
// * Properties can be changed, added, deleted, and some are read only.

// ! Syntax
// * Declaration and Initialization of object.

// var obj_name = {
//     key1:value1,
//     key2:value2,


//     kay_n:value_n
// }

// * 1. By Using Object Literals.

var fees = {}; //Declaration

// Initialization way1 

fees['Rahul']=100;
fees["Rani"]=200;
fees["Raja"]=300;

// Accessing 
console.log(fees.Rahul);


// Another Way Best way to write
var fees = {
    Rahul:100,
    Sumit:200,
    Rohan:400
};

console.log(fees.Sumit);
console.log(fees.Rahul);

// ? Adding New Properties to the object.

fees.sonam = 500;
fees["Naga"]=600;
console.log("New Property add :-",fees);

// ? Deleting properties from object.

delete fees.Naga;
console.log("Deleted 'Naga' From Object :-",fees);


// ? Nested Objects

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car2);
console.log(myObj.myCars.car1);
console.log(myObj.age);

console.log(myObj.myCars["car2"]); //Another Method to access properties.
console.log(myObj["myCars"]["car1"]); //Another Method to access properties.

// We can access properties by assigning to variable.
let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2]);


// ? JS Object Methods.

// * A method is a function definition stored as a property value.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// TO Access object method.
// ! Syntax
// * objectName.methodName()

// console.log(person.fullName);
console.log(person.fullName());


// ? JS Object Constructors.
// * Sometimes we need to create many objects of the same type.
// * To create an object type we use an object constructor function.
// * It is considered good practice to name constructor functions with an upper-case first letter.
// * By Using Constructor function we can create  multiple objects of same type.
// * In the constructor function, this has no value.
// * The value of this will become the new object when a new object is created.


function Employee(first,last,age,salary){
    this.firstName= first;
    this.lastName = last;
    this.pAge = age;
    this.pSalary = salary;
    this.fullName = function (){
        return this.firstName +" "+ this.lastName;
    }
}

const firstEmp = new Employee("Nagarjun","Honrao",27,25000);
const secondEmp = new Employee("Radha","Vyas",26,20000);
console.log(firstEmp.firstName,secondEmp.lastName);
console.log(secondEmp.pAge);
console.log(firstEmp.fullName());

// ? Adding a Property to an Object

// firstEmp.nationality = "Indian";
// console.log(firstEmp);


function Family (name,age,work){
    this.mName = name;
    this.Age = age;
    this.mWork = work;
    this.fullDetail = function (){
        return "My Name is "+this.mName+" and my age is "+this.Age+". I work as "+this.mWork+"I am an "+this.nationality;
    }
}

const fMember = new Family("'Nagarjun'",27,"Software Engineer.")
const sMember = new Family("'Vijay'",20,"Doctor.")
console.log(fMember.fullDetail());

// ? Adding a Property to a Constructor.
// * We can not directly add an property to a constructor if we try it will throw error
// * TO add property to an constructor we use a method

Family.prototype.nationality = "Indian";
console.log(fMember.nationality);
console.log(sMember.nationality);

fMember.nationality= "Indo" // It will Overrite the constructors property
console.log(fMember.nationality);
console.log(fMember.fullDetail());



// ? for in loop in js

// * The JavaScript for in statement loops through the properties of an Object:

// ! Syntax

// for (key in object) {
//   // code block to be executed
// }

const per = {fname:"John", lname:"Doe", age:25};


// for (let x in per) {
//   console.log(x);
// }


// * The for...of loop cannot be used to iterate over an object


