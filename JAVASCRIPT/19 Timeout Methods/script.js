// ? setTimeout and clearTimeOut Method

// * The setTimeOut() method sets a timer which executes a function or specified piece of code once after the time expires.
// * The function is executed once
// * It returns a positive integer value which identifies the timer created by the call to setTimeOut(); This value can be passed to clearTimeOut() to cancel the timeout.

// ! Syntax
// todo:- setTimeout(function,milliseconds)


// * The clearTimeOut() method cancels a timeout previously established by calling setTimeOut()

// ! Syntax

// TODO:- clearTimeOut(TimeOutID);


// var myTimeout = document.getElementById("demo");

// function show(){
//     myTimeout.style.color = "red";
//     myTimeout.style.border = "2px solid black";
// }
// var TimeOutID=setTimeout(show,4000);

// document.getElementById("mybtn").addEventListener("click",clrtime);

// function clrtime(){
//     clearTimeout(TimeOutID);

// }


// ? setInterval() Method
// * It calls a function repeatedly with a fixed time delay between each call.

// ! Syntax
// todo:- setInterval(function,milliseconds);

// function show(){
//     console.log("Hello World");
// }

// setInterval(show,2000);


var out = document.getElementById("dev");
document.getElementById("ubtn").addEventListener("click",clrInt);

function call(){
    out.textContent+="Nagarjun ";
}

const intr = setInterval(call,2000);


function clrInt(){
    clearInterval(intr);
}