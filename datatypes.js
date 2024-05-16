//(primitive datatypes in js) nn ss bb u

console.log("dataypes in JavaScript practice")
let a = null; // -->(n)null type
let b = 234; // -->(n)number type
// let c = Symbol("this is new symbol"); //(s)symbol type
let d = "adrem"; // (s)string type
let e = "true"; // (b)boolean type
let f = BigInt("567") + BigInt("200"); // (b)bigint type
let g = undefined;

console.log(`${a}\n${b}\n${d}\n${e}\n${f}`)
console.log(typeof c)
//non primitive datatype (we can call them object)
const item = {
    "Harry": true,
    "saddam": false,
     "adrem": 56,
     "tech": undefined
}
console.log(item["adrem"]);



