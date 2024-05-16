//we are now tackling loops in array in JavaScript
console.log("For Loop in arrays")
let marks=[45,67,76,98,89];
for(let i=0; i<marks.length;i++){
    console.log(marks[i])
}

// For-Each loop
console.log("---------------------------------------------------------------------")
console.log("Multiply each element with its own value using for-Each loop")
marks.forEach((element)=>{
  console.log(element-10)
})

// array.from 
console.log("---------------------------------------------------------------------")
console.log("Using Array.From")
let name = "Adrem"
let a = Array.from(name)
console.log(a)

// For..OF Loop ( it is used to get values from array)\
console.log("---------------------------------------------------------------------")
console.log("Using For..of loop to get the values from array")
let fruits = ["Banana", "apple", "mangoe","orange"]
for(let i of fruits){
    console.log(i);
}

// For..IN Loop (it is used to get keys from array)
console.log("---------------------------------------------------------------------")
console.log("Using For..in loop to get the keys of values in array")
 let z= ["saddam","ahmed","adrem","routers"]
 for(let i in z){
    console.log(i);
 }
