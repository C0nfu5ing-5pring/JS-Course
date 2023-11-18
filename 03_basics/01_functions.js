// Function Syntax
function functionName() {

};

// Suppose I want to do this 5 times:

// console.log("A");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("L");

// It would be time consuming. So, in that case we can use functions:

// function sayMyName() {
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// };
// // But this won't work now because we have made the function but we never called it. We never told it to start functioning. To do that we need to call the function. Here is how you call a function:
// sayMyName();


// Here is how you take inputs un functions. Remember had to give some parameters to use the .push() function? Yes, .push() is also a function that takes input (which we call arguments).
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// };
// addTwoNumbers(3, 7);
// In the above function there is no logic. We haven't actually checked the data type of argument. It is senseless for now.

// Difference between parameters and arguments
// Parameter
// When we create a function, this part, function addTwoNumbers(number1, number2) is know as parameter.
// Argument
// When we give value to the function, we say that, addTwoNumbers(3, 7) is argument.


// What if store the output in a variable? Yes, we can store the output in a variable but if it is outside the scope of the function, we might get unexpected results.
// let result = console.log(addTwoNumbers(3, 9)); // Here we get output 12.
// It got stored. No problem yet but if we console log result we might see something strange.
// console.log("Output: ", result); // undefined

// To solve this, we might have to write our function again:

// function addTwoNumbersUpdated(number1, number2) {
//     let result = number1 + number2;
//     return result;
// };
// let result2 = addTwoNumbersUpdated(1, 2);
// console.log("Output: ", result2); // 3

// If write anything after returning something, it will not happen
// For example:
// function willNotReturn(num1, num2) {
//     return num1 - num2;
//     console.log("Hey There!")
// };
// let result = willNotReturn(3, 2);
// console.log(result); // Will not return "Hey There!"


// function willReturn(num1, num2) {
//     console.log("Hey There!");
//     return num1 - num2;
// };
// let result2 = willReturn(4, 2);
// console.log(result2);

// How to take values in different ways:

// function userLoggedinMessage(userName) {
//     if (userName === undefined) {
//         console.log("Enter a user name.");
//         return;
//     } else {
//         return `${userName} just logged in.`
//     }
// };
// console.log(userLoggedinMessage()); // When we don't give an argument, we get, undefined just logged in, as an output.

// You can also give default value to parameter like this:

// function userLoggedinMessage(userName = "You") {
//     return `${userName} just logged in.`
// };

// console.log(userLoggedinMessage()); // You just logged in.