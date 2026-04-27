let add = function(a,b){
   
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
}
   return (a + b);  
}
let sub = function(a,b){
    
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
}
    return (a-b);
}
    
let mult = function(a,b){
    
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
}
    return (a*b);
}  


console.log(add(10,2))
console.log(sub(20,5))
console.log(mult(5,2.5))
