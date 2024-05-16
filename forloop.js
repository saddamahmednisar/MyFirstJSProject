// loops in javaScript firstly for loop

const prompt = require("prompt-sync")();
let sum=0;
let n=prompt("Enter the  value of n = ")
n=Number.parseInt(n)
for(let i=1; i<=n; i++){
  sum=sum+i;

}
console.log("sum of first " + n + " natural number is = "+ sum)





/*
// FOR IN LOOP
let obj={
  Mangoes:90,
  apple:89,
  carrot:78,
  watermelon:98
}
for(let a in obj){
    console.log("Total " +  a  + " are " + obj[a])
}
for(let b of "saddam"){
    console.log(b)
}
*/