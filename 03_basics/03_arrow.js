let user = {
    userName: "Shish",
    price: 399,

    welcomeMessage: function () {
        // console.log(`${userName}, wecome to website.`); 

        // This is correct but whenever we want to access a variable and refer to current context we have to use 'this' keyword.

        // console.log(`${this.userName}, welcome to website`); // Here 'this' refers to the userName that is in the scope of the function.

        // console.log(this); // Will give everything that is in this scope.
    }
};

// user.welcomeMessage();
// user.userName = "Aahil";
// user.welcomeMessage();


// console.log(this); // Gives out an empty object.
// It happens only in node.
// But when you inspect on a browser you might see Window... something, something as an output.
// Reason in the video.

// function chai() {
//     userName = "Shish"
//     console.log(this); // Still we get a lots of ouputs.
//     console.log(this.userName); // undefined
// }

// chai(); // When we print 'this' in a function in node environment we might get a lot of things as an output.

// 'this' doesn't work for functions as well as arrow functions.

// This is how to declare arrow functions:

// let chai2 = () => {
//     userName = "Shish"
//     console.log(this.userName); // undefined
// }

// Now, let us know more about arrow functions:

// let addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2, 3));

// Implicit return
// let addTwoAgain = (num1, num2) => num1 + num2;
// let addTwoAgain = (num1, num2) => (num1 + num2);
// When we use curly brackets we have to mention return keyword but when we use parenthesis there is no need to metioning it.

// let addTwoAgain = (num1, num2) => ({ userName: "Shish" });

// console.log(addTwoAgain(3, 4));

