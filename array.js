// Now we are tackling thye most important topic in JS and that is ARRAY
console.log("Welcome to array world");
let marks_class_12=[89,90,67,83,73,false,"not present"];

// change or give value to index
marks_class_12[7]= 99;// adding a new value to the array
marks_class_12[1]=10; // changing the value of an array
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); // it will be undefined bcz index 7 doesn't exist
console.log("The length of class 12 marks is = ", marks_class_12.length)
console.log(marks_class_12);
console.log("The type of an array is = " , typeof marks_class_12);



// print using for loop
console.log("using for loop")
for(let i = 0; i<marks_class_12.length;i++);
console.log(marks_class_12[i])