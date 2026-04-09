function operation(func, first, second) {
     return func(first, second);
}
let myAdd = function(a, b) {
     return a + b;
}
// função chamando variavel
console.log(operation(myAdd, 10, 20)); 

//função anonima direto no argumento
console.log(operation(function(a, b) {
     return a * b;
}, 10, 20));