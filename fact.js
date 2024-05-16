//factorial of number
const prompt = require("prompt-sync")();
let fact=1;
let n = prompt("enter the number")
n=Number.parseInt(n)
if(n==0 || n==1){
    console.log("factorial= ", n)
}
else{
    for(let i=1; i<=n; i++){
        fact=fact*i;
    }
    console.log("factorial", fact)
}
