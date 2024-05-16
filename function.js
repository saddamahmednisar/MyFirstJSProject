//practice function
//first method
function onePlusavg(x,y){
    console.log("Done")
    return Math.round (1 + (x + y) / 2);
   
}
//second method
const sum = (p,q)=>{
    return p+q;
}
//without parameters with seconmd method
const hello=()=>{
    console.log("hello! how are you i am good")
}

let a=1;
let b=2;
let c=3;
hello();
console.log("one plus average a and b i s= ", onePlusavg(a,b))
console.log("one plus average a and b i s= ", onePlusavg(b,c))
console.log("one plus average a and b i s= ", onePlusavg(c,a))
console.log(sum(7,9))