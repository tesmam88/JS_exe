let num = [1,2,3,4,5,6,7,8,9,10];

let repet = function(callback){
    console.log(num);
    let again = setInterval(callback,1100);
    console.log(num)
    setTimeout(function(){
        clearInterval(again)
    },2200)
}
repet(function(){
    console.log(num)
});