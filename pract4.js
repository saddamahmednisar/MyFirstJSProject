console.log("har\"".length)
// starts with and ends with
const str1 = 'Saturday night plans';
console.log(str1.startsWith('t'));
console.log(str1.endsWith('ans'));
// problem 4
let str2= "please give me 1000"
let amount = str2.slice(15)
console.log(amount)
console.log(typeof amount)

//problem 5
let friend = "deepika";
friend[3]='r';// it cant change the string bcz string is immmutable
console.log(friend);