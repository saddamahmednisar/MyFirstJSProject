//Factorial using loop
const prompt = require("prompt-sync")();
let fact = 1;
let n = prompt("Enter the value of n::");
n = Number.parseInt(n);
if (n == 0 || n == 1)
{
  console.log("Fact = ",n);
}
else
{
  for(let i = 1; i <= n; i++)
    {
      fact = fact * i;
    }
  console.log("Fact = ",fact);
}
console.log("Thanks alot Harry bhaiya");