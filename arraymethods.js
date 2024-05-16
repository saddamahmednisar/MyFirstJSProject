// Now we are going to learn about array methods in JS
console.log("we area now tackling with array methods");
let num = [2,45,87,84];

//  toString  array Method
let b = num.toString();
console.log(b, typeof b)

//  join  array Method
let c= num.join("_");
console.log(c, typeof c)

// pop array method
console.log("poping down")
let a =num.pop(); // in a we return the poped value
console.log(num, a)


// push array method
console.log("pushing down")
num.push(15); // in a we return the pushed value
console.log(num)


// shift array method
console.log("shifting down")
let d = num.shift(); // remonves first element anf return it
console.log(num,d)
console.log(num.length)

// unshift array method
console.log("unshifting down")
let e = num.unshift(19); // add first element and return new legth
console.log(num,e)

// delete array method
console.log("deleting array element")
 delete num[3]; // in this element ofv index 4 is delete but array length is same
 console.log(num)

 // concat  array method
console.log("concating")
let z1= [1,2,3]
let z2 =[4,5,6]
let z3= [7,8,9]
let f= z1.concat(z2,z3);
console.log(f);

// sort array method
console.log("sorting an array alphabetically")

 let compare=(a,b)=>{
    return(a-b)
 }
 let x= [4,5,3,1,11] // here it can sort alphabeticall not ascending  e.g 1,11,3,4,5 but we make function then it work accesndingly
x.sort(compare)
 console.log(x);


 // splice array method
 let p=[1,7,6,4,3,15,7,8]
 p.splice(1,4,1021,1022,1023,1024) // first 1 from where start second 4 how many removes  and next values for adding from where we remove
 console.log(p);

// slice array method
let q=[1,2,3,4,5]
let w= q.slice(1,3); // make like this bcz it cant modify in previous array
console.log(w);
