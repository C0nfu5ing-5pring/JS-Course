// Immediately Invoked Function Expression (IFFE)

// Whenever we need to run a function immediately, without any delay like in a fractionof a second, we use IIFE
// It is very easy actually
// Here is what a normal function looks like:

function chai() {
    console.log("Database Connected");
}
chai(); // We get it immediately but we spoiled the glbal scope.

// To avoid it, this is how we use IIFE:

(function chai2() {
    // Named IIFE
    console.log("Database Connected");
})();

// Using it in an arrow function:
(() => {
    // Unnamed IIFE
    console.log("Database Connected");
})();

// How to pass a value in IIFE:
((name) => {
    console.log(`${name}, you are connected to the database.`);
})("Shish");


// We use it to reduce pollution in global scope. 