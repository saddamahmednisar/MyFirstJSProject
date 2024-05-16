//Now we are tackling with Map,filter and reduce use in Javascript
console.log("Use of Map, Filter and reduce In JavaScript")
console.log("-------------------------------------------------")
let arr = [45,67,36,38]
let a= arr.map((value)=>{
    console.log(value)
    return value+1; 
})
console.log(a);


// second time practice map function
console.log("Map Function")
let x =[34,36,37,38]
let y = x.map((value, index, array)=>{
    console.log(value, index, array)
    return value+10;

   
})
console.log(y)

// array filter method
console.log("-------------------------------------------------")
console.log("Filter Function in array")
let arr1= [23,6,35,2,38]
let p= arr1.filter((a)=>{
    return a<10;
})
console.log(p)


//second time practice filter function
let arr2=[23,24,2,8,90]
let q=arr2.filter((s)=>{
    return s<10;
})
console.log(q);



// Reduce array function
console.log("------------------------------------------------------")
console.log("Reduce array Function")

let arr3 = [1,2,3,,5,4,6]
const reduce_func=(h1, h2)=>{
    return h1+h2;
}
let newarr3=arr3.reduce(reduce_func);
console.log(newarr3)

// Reduce array function
console.log("------------------------------------------------------")
console.log("Reduce array Function second time practice")
let arr4 = [1,5,2,6,3]
const func=(s1,s2)=>{
     return s1+s2;
}
let newarr4= arr4.reduce(func);
console.log(newarr4);
