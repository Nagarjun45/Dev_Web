// // ? Callback

// function pooja(callback){
//     console.log("Pooja Is Danger");
//     setTimeout(()=>{
//         console.log("Pooja Is Noice Girl!");
//         callback();
//     },5000)
// }

// function pj(callback){
//     console.log("Pooja ka Talent pe Sab Ghayal....👧");
// }

// pooja(pj);




// function naga(callback){
//     let sum=0;
//     sum=sum+11;
//     console.log(sum);
//     setTimeout(()=>{
//         console.log("sum is 12");
//         callback();
//     },5000)
// }
// function sum(callback){
//     console.log("sum is 13");
// }
// naga(sum);



function task1(callback){
    setTimeout(()=>{
        console.log("Task1 is completed");
        callback();
    },3000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task2 is completed");
        callback();
    },2000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task3 is completed");
        callback();
    },1000)
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task4 is completed");
        callback();
    },1500)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All Tasks are Completed !");
            });
        });
    });
});
