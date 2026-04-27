let add = (a,b) =>{
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
    }
 return a+b;
}

let sub = (a,b) =>{
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
    }
 return a-b;
}

let mult = (a,b) =>{
    if (!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Not a number...Try again")
    return NaN;
    }
 return a*b;
}


console.log(add(5,5));
console.log(sub(5,5));
console.log(mult(2,5));