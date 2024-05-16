const prompt = require ("prompt-sync")({sigint: true})
let a= prompt("whats your age?")
a=Number.parseInt(a)
if(a>0){
    console.log("this is a valid age") 
}