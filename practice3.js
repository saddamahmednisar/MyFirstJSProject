// problem 1
let marks = {
    saddam:90,
    ahmed:20,
    shazad:30,
    umar:20
}
//for(let i=0;i<Object.keys(marks).length;i++){
    //console.log("The marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
//}

//problem no 2
for(let key in marks){
    console.log("The marks of " + key +  " are " + marks[key])
}                    
