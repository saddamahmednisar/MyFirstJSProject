const prompt=require("prompt-sync")();
const animal=prompt("lion,lizard,dog???")
switch(animal){
    case"lion":
    console.log("this animal is lion");
    break;
    case"dog":
    console.log("this animal is dog")
    break;
    case"lizard":
    console.log("this is lizard")
    break;
    default:
        console.log("the animal is not in the record")
}