// let a = 10;
// const b = 20;
// var c = 300;

{ } //This is scope.

// If we put let, var, const here:
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // d = 40;
}

// console.log(a); // a is not defined.
// console.log(b); // b is not defined.
// console.log(c); // 30
// console.log(d); // 40

// This is a major problem. Even if we declared var c in that particular scope, we could still access it which is not considered a good thing.

// Whatever we declare in {} is called block scope. Anything out of it is called global scope.

// What is the value of a?

let a = 300;
if (false) {
    let a = 30;
    console.log(a); // 30
}

console.log(a); // 300;