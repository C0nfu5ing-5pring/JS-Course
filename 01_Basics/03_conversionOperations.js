let score = "33abc"
// console.log(typeof(score));

scoreInNumber = Number(score);
// console.log(typeof(scoreInNumber));
// console.log(scoreInNumber);

// "33" => 33
// "33abc" => NaN (NaN is a number.)
// true => 1; false => 0;

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "Shish" => true

let someNumber = 33;
let someNumberInString = String(someNumber);
// console.log(typeof(someNumberInString));
// console.log(someNumberInString);

/****Operations****/

let value = 3;
let negValue = -value;
// console.log(negValue);   

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "shish";
let str2 = "fruitwala";
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2); // not 14
// console.log(1 + 2 + "2") // 32 because JS reads from left to right so that means that first it will solve from the left and then do the rest.

// console.log((3 + 4) * 5 % 3); //These type of operations are good for test or exams but in real life situations no body will appreciate you. Why not use parenthesis instead of writing this much confusing code?

// console.log(+true); // This is worst piece of code known to mankind. That's illegal.

let num1, num2, num3 

num1 = num2 = num3 = 2+2; // It doesn't have consistancy then why to write code in this type.

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
