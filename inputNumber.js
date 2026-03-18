let num = Number(prompt("Digite um numero: "));
let win = false;

if (num >=90 && num <=110){
    win = true;
    alert("You WIN!!!!");
    console.log("winner");
}else{
    alert("You Lose, try again.")
    console.log("loser")
};