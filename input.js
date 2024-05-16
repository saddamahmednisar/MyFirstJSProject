const prompt=require("prompt-sync")();
let a=prompt("what is your name?")
console.log("Your name is = ",a)
let b=prompt("whats your age?")
if(b>18){
    console.log("its your valid age for driving")
}
/*
else if(b>10 && b<18){
    console.log("you are a kid")
}
*/
else{
    console.log("this is not your valid age for driving")
}
//ternary operators

console.log("you can", (b<18? "not drive":"drive"))