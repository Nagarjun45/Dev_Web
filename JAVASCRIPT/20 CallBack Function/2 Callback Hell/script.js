
// ? Synchronous Function (One By One Execution)

// function task1(){
//     console.log("Task 1 Complete");
// }

// function task2(){
//     console.log("Task 2 Complete");
// }

// function task3(){
//     console.log("Task 3 Complete");
// }

// function task4(){
//     console.log("Task 4 Complete");
// }


// task1();
// task2();
// task3();
// task4();

// console.log("All Task Completed");


// ? Asynchronous Functions.


// function task1(){
//     setTimeout(()=>{
//         console.log("Task1 is Completed");
//     },2000)
// }

// function task2(){
//     setTimeout(()=>{
//         console.log("Task2 is Completed");
//     },1500)
// }

// function task3(){
//     setTimeout(()=>{
//         console.log("Task3 is Completed");
//     },3000)
// }

// function task4(){
//     setTimeout(()=>{
//         console.log("Task4 is Completed");
//     },1000)
// }

// task1();
// task2();
// task3();
// task4();

// console.log("All Task Completed");


// ? To print task one by one using callback but it becomes callback hell.

// function task1(callback){
//     setTimeout(()=>{
//         console.log("Task1 is Completed");
//         callback();
//     },2000)
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task2 is Completed");
//         callback();
//     },1500)
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task3 is Completed");
//         callback();
//     },3000)
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log("Task4 is Completed");
//         callback();
//     },1000)
// }


// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All Tasks are completed");
//             });
//         });
//     });
// });



setTimeout(() => {
    console.log("Komal Uthali");
    setTimeout(()=>{
        console.log("Komal ne Nasta Kela");
        setTimeout(()=>{
            console.log("Komal Metro Madhe Basali");
        },2000)
    },3000)
},2000);