let add = function(a,b){
    return a+b
}
let sub = function(a,b){
    return a-b
}
let mult =function (a,b){
    return a*b
}

let action =(callback,a,b) =>{
    return callback(a,b)
}

console.log("Begin the function");
console.log(action(add,5,5));
console.log(action(sub,5,5));
console.log(action(mult,5,5));

