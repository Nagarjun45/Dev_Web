// ? Higher Order Function
// * A function takes another function as an argument or returns a function from it called as HOF.

// ! EX1:-
// * We write our logic here
function sum(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}


// * HOF Takes logic functions as argument
function calculatorFunction(fn,x,y){
    console.log(fn(x,y));
}

calculatorFunction(sum,2,3);
calculatorFunction(sub,2,1);


// ! EX2:-

function candidate1(name){
    return name;
}

function cand2(naam){
    return naam;
}

function intro(fn,name){
    console.log("Hi, I am "+name);
}

intro(candidate1,"Nagarjun");
intro(cand2,"Radha");