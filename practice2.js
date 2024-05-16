//chapter 2 practice set
//problem no 1
/*
const prompt = require("prompt-sync")();
let age = prompt("what is your age???");
age=Number.parseInt(age)
if(age>10 && age<20){
    console.log("yes it lies between 10 and 20")
}
else{
    console.log("No it doesn't lies in between 10 and 20")
}

//problem no 2
const prompt = require("prompt-sync")();
let age = prompt("what is your age???");
switch(age){
    case '6':
        console.log("you are kid");
        break;
    case '18':
        console.log("you are now young");
        break;
    case '60':
        console.log("you are getting older now");
        break;
    default:
        console.log("your age is not in our record");
}


//problem no 3
const prompt = require("prompt-sync")();
let num = prompt("enter the number???")
num =Number.parseInt(num);
if (num%2==0 && num%3==0){
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}

//problem no 4
const prompt = require("prompt-sync")();
let num = prompt("enter the number???")
num =Number.parseInt(num);
if (num%2==0 || num%3==0){
    if(num%2==0){
    console.log("your number is divisible by 2")
    }
    else if(num%3==0){
        console.log("your number is divisible by 3")
        }
        
}
else if(num%2==0 && num%3==0){
    console.log("your number is divisible by 2 and 3 both")
    }
else{
    console.log("your number is neither divisible by 2 nor 3")
}
*/
// problem no 5
const prompt = require("prompt-sync")();
let age = prompt("whats your age???")
console.log("you can", age<18? "not drive":"drive")