// singleton
// Object.create

// object literals

let JsUser = {
    name: "Shish", /** Remember one thing, JS stores the name (here name) as a string. For example "name": "Shish" but we don't need to show it as a string. Yes, we can but it is not neccessary.**/
    "full name": "Shish Fruitwala",
    age: 15,
    location: "Palej",
    email: "shish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// How to access values in an object.
// There are two ways, 

// console.log(JsUser.name); // Most people think that this is the only way to access an object. But it is not the only way. If we use this method we cannot access this "full name": "Shish Fruitwala" type of value. To access this type of value we can use the following method: 
// console.log(JsUser["name"]); // This method is very useful and efficient. We should always perefer this.

// To show a symbol in an object and then access it, we have to use a different syntax.

let mySymbol = Symbol("ABC");

// To refer to a symbol in an object use this syntax: [symbolName]
let myObj = {
    [mySymbol]: "DEF"
}
// console.log(myObj[mySymbol]); // The value has changed from "ABC" to "DEF".

// To change the values:
JsUser["email"] = "Shish@openai.com";
// console.log(JsUser["email"]);

// To lock the values:

// Object.freeze(JsUser);
JsUser["email"] = "Shish@microsoft.com";
// console.log(JsUser["email"]); // It won't change because we already freezed the object and now no changes can be made.

// Now let's add a function to an object

JsUser.greeting = function(){
    console.log("Hello JS user.");
}
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}!`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


