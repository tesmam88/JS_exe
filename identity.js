//strict equality operator
console.log(10===5);
console.log(100===100);
console.log("10"===10);
console.log("Bob"==="Alice");
console.log("Bob"==="Bob");

console.log("---------------------------")
// equality operator

console.log(10 == "10");
console.log(10 == 10n);
console.log("Alice"=="Bob");
console.log(10==5);

console.log("---------------------------")
// inequality operator(diferents)

console.log(10 != 5);
console.log(5 != 5);
console.log("Bob" != "Alice");
console.log("Alice" != "Alice");

console.log("---------------------------")
// nonidentity operator(identical)
console.log(10 !== 5);
console.log(10 !== 10);
console.log(0 !== false);
console.log(undefined !== false);
console.log("Alice"!=="Alice");

