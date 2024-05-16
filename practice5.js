//array practice in JavaScript
//console.log("ARRAY PRACTICE SET")
//const prompt=require("prompt-sync")();
//let arr1=[1,2,3,4,5,84]
//let a = prompt("Enter the number = ")
//a= Number.parseInt(a)
//arr1.push(a);
//console.log(a);
//console.log(arr1)


//second practice p`1
//const prompt = require("prompt-sync")();
//let arr2 = [23,24,25,26]
//let z =prompt("enter a number you want to add = ")
//z=Number.parseInt(z)
//arr2.push(z);
//console.log(arr2);

//problem 2
//let arr3 = [23,24,25,26]
//let z;
//do{
// z =prompt("enter a number you want to add = ")
//z=Number.parseInt(z)
//arr3.push(z);
//console.log(arr3);
//
//}while(z!=0)
//problem 3
// filter
/*
let arr= [1,2,3,4,5]
let newarr=arr.filter((a)=>{
    return a<3;
})
console.log(newarr)
*/
//problem 4
//let arr1 = [1,2,3,4]
//let arr2=arr1.map((value)=>{
  //  console.log(value)
   // return(value*value)
//});
//console.log(arr2)
//problem 4
let arr1 = [1,2,3,4,5]
let arr2=arr1.reduce((x1,x2)=>{
    return(x1*x2)
});
console.log(arr2)