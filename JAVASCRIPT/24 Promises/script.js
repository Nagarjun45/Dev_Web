// ? Promises
// * In JS, a promise is a good way to handle asynchronous operations.
// * It is used to find out if the asynchronus operations successfully completed or not.
// * A Promise may have one of three states

// 1. Pending
// 2. Fullfill
// 3. Rejected


// ! Main state Pending :- .then(onFullfillment) & .catch(onRejection)

// ? Creating promises

// * To create a promise object, we use promise() constructor.

// ! Syntax

//todo:- let promise = new promise(function(resolve,reject){"Do Something code here"});

// * The promise() constructor takes function as a argument. The function also accept two functions resolve() and reject().

// * If the promises returns successfully,the resolve() function is called. And, if an error occurs, the reject() function is called.

// ? The then() method
// * This method is used with the callback when the promise is successfully fulfilled or resolved.

// ? The catch() method
// * This method is used with the callback when the promise is rejected or if an error occurs.

// ? The finally() method
// * This method is executed when the promise is either resolved successfully or rejected.


const ticket = new Promise((resolve,reject)=>{
    const isBorded = false;
    if(isBorded){
        resolve("You are in the plane");
    } else{
        reject("You missed the plane")
    }
});

ticket.then((data)=>{
    console.log("Wohh hoo",data);
})
.catch((data)=>{
    console.log("Ohh Nooo",data);
})
.finally(()=>{
    console.log("I will be always executed");
})







