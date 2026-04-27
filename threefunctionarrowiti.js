let add = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(add(5,5.2))
console.log(add(15,5))
console.log(add(5,20))