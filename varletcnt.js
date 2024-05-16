console.log("difference btw var, let and constant")
//var a= 45;
//var a = "p"; //when we redeclare in var it can change to that is problem
let b = "adrem"; // so we useb let cz first it excute block and then another whatever it same
//let b = 67; if with let without block it can't redeclare cz already declare
let c = null;
const author = "adrem"
//let author =56; // it throws an an error cz author is constant it cant be change
//const adrem; // it also throw an error cz it is not initialize
let d = undefined;

{
    let b ="this";
    console.log(b)
}
console.log(b)
//console.log(a)