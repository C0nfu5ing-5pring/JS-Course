const score = 123;
// console.log(score) // 123

const balance = new Number(12343);
// console.log(balance); // [Number: 12343]

console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1234.8972;
// console.log(otherNumber.toPrecision(6)); // Gives first 6 values of the number and if it can round off it will provide the round-offed number.

const balanceTwo = 1000000;
// console.log(balanceTwo.toLocaleString()); // 1,000,000
// console.log(balanceTwo.toLocaleString("en-IN")); // 10,00,000


/*********************Maths******************/

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // Changes - value to + but does not change + to -
// console.log(Math.round(4.3)) // 4
// console.log(Math.round(4.6)) // 5   
// console.log(Math.ceil(4.1)) // 5. What ceil does is, even if the number has 0.1 in it, it will convert it into the next number.
// console.log(Math.floor(4.2)); // 4. What floor does is, even if the number has 0.9 in it, it will show the original number only.
// console.log(Math.min(2,3,4,5,6,7,8,9,10,23)); // 2. Gives out the smallest number in the following.
// console.log(Math.max(2,3,4,5,6,7,8,9,10,23)); // 2. Gives out the biggest number in the following.

console.log(Math.random()); // Gives random value between 0 and 1. for example- 0.123232465...
console.log(Math.random()*10 ); // Multiplies that random number with 10. for example- 1.23232465...
console.log(Math.random()*10 + 1); // Multiplies that random number with 10 and makes sure that no number starts from 0, here, 1 will be the smallest number. for example- 10.32576188973825
console.log(Math.floor((Math.random())*10 + 1)); // Multiplies that random number with 10 and makes sure that no number starts from 0, here, 1 will be the smallest number. for example- 10.32576188973825

 