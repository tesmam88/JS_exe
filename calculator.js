//ask the user for a number one by one, two numbers and a math operation '+','-','*','/' only.
let num1 = Number(prompt("Tape the 1st number: "));
let num2 = Number(prompt("Tape the 2nd number: "));
let operation = prompt("Tape the operaion you want:'+','-','*','. ") ;

switch(operation){
    case "+":
    resultado = (num1+num2)
    alert(resultado)
    break;

    case "-":
    resultado = (num1-num2)
    alert(resultado)
    break;

    case "*":
    resultado = (num1*num2)
    alert(resultado)
    break;

    case "/":
    resultado = (num1/num2)
    alert(resultado)
    break;

}
console.log(resultado)