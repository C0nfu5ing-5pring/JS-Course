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
console.log(typeof(someNumberInString));
console.log(someNumberInString);