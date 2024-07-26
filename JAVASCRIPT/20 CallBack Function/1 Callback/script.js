// ? Callback Function.😴🥱😫

// * A callback function is a function(It can be any function anonymous or arrow) passed into another function as argument.
// * A callback is a function that is to be executed after another function has finished executing- hence the name "callback"
// * The best use of callback function where one function has to wait for another function.
// * In the real world, callbacks are most often used with asynchronous functions.



// * In lemon terms, Agar mujhe ek kaam hone ke immediate baad dusra kam karna hai wo hum callback function ka use karke karte hai.


// ! EX1

// function show(){ 
//     console.log("My Name is Nagarjun");
// }

// function geeky(callback){
//     callback();
// }

// geeky(show);

// ! EX2

// function mainFunction(callback){
//     console.log("Operation Performing....");

//     setTimeout(function(){
//         callback("Operation Complete!");
//     });
// }


// function callbackFunction(result){
//     console.log("Result :"+ result);
// }

// mainFunction(callbackFunction);


// ! EX3
// const numbers = [1,2,3,4,5,6,7,8];

// function mainFunction(callback){
//     console.log("Operation performing....");
//     numbers.forEach(callback);
// }


// function callbackFunction(number){
//     console.log("Result : "+ number);
// }


// mainFunction(callbackFunction);


// ! EX4

// function greet(name,myFunction){
//     console.log("Hello World!");
//     myFunction(name);
// }

// function callback(name){
//     console.log("My Name is ",name);
// }


// setTimeout(greet,2000,"Nagarjun",callback);

// ! EX5

// function say(cback){
//     console.log("Hello, I am ",cback());
// }

// function res(){
//     return "Nagarjun";
// }

// say(res);


// ! EX6

function getCheese(callback){
    setTimeout(() => {
        const cheese = "🧀"
        console.log("Here is the cheese",cheese);
        callback(cheese);
    }, 2000);
}

// todo:- Pahle cheese aya uske baad maine aur ek function likha jisme maine bataya ki mujhe cheese mil gaya aur usko maine getCheese main callback kar diya isse ye hoga jaise hi function call hoga after 2 sec mujhe here is the cheese milega uske dusra function call hoke got the cheese milega.
// console.log(getCheese()); //Exp:- Undefined
getCheese((cheese)=>{
    console.log("Got the Cheese",cheese);
})