// let a = 10;
// const b = 20;
// var c = 300;

{ } //This is scope.

// If we put let, var, const here:
// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     // d = 40;
// }

// console.log(a); // a is not defined.
// console.log(b); // b is not defined.
// console.log(c); // 30
// console.log(d); // 40

// This is a major problem. Even if we declared var c in that particular scope, we could still access it which is not considered a good thing.

// Whatever we declare in {} is called block scope. Anything out of it is called global scope.

// What is the value of a?

// let a = 300;
// if (false) {
//     let a = 30;
//     // console.log(a); // 30
// }

// console.log(a); // 300;


// Nested Scope

function one() {
    const userName = "Shish";

    function two() {
        const website = "Youtube";
        console.log(userName);
    }
    // console.log(website); // Nothing

    // two(); // Shish
}

// one(); // Nothing

// What happened here is...
// We can see the outputs but there is something strange. So, I just want to tell you that imagine a small child sees you with an ice-cream. He wants to get that ice-cream from you. What would you do as a good human being? You will give your ice-cream to him. BUT when an adult snatches an ice-cream from a child, isn't that immoral? What would people think?
// Similarly, the child element can get the values of parent element but the parent elment cannot access/get values of child element.


// These type of things can happen anywhere like in if...else statements etc.

// if (true) {
//     const userName = "Shish";
//     if (userName === "Shish") {
//         const website = " Youtube"
//         // console.log(userName + website); // Shish Youtube
//     }
//     // console.log(website); // Nothing
//     // console.log(userName); // Shish

// }

// console.log(userName); // Nothing, because it is out of the scope of if...else statement.

/*************************************INTERESTING**********************************/


console.log(addOne(5)); // It works even you call the function before it's declaration. // 6
function addOne(num) {
    return num + 1;
}

// Another way of declaring function.

console.log(addOne(5)); // When we do the same with this type of declaration, we get an error.
const addTwo = function (num) {
    return num + 2;
}