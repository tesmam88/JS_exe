let num = Number(prompt("Tap the first number(0-100): "));
let num2 = Number(prompt("Tap the seconde number(0-100): "))

if(!isNaN(num) && !isNaN(num2)){
    
    if (num>num2){
        console.log(`${num} is bigger than ${num2}`)
        alert(`${num} is bigger than ${num2}`)
    }else if(num2>num){
        console.log(`${num2} is bigger than ${num}`)
        alert(`${num2} is bigger than ${num}`)
    }else{
        console.log("the numbers are equal!!")
        alert ("the numbers are equal!!")
    }
}
else{
    alert("Invalid Input")
};

