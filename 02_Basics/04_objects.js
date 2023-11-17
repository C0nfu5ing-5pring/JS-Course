// We will learn how to make objects using constructors.

let tinderUser = new Object(); // This is a singleton object.
tinderUser.id = "unkn0wn";
tinderUser.name = "Shish";
tinderUser.isLoggedIn = false;

let regularUser = {
    email: "somehthing@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shish",
            lastname: "Fruitwala"
        }
    }
}; // You put as many object in an object as you like.

// Here is how to access these kind of values.
// console.log(regularUser["fullname"]["userfullname"]["lastname"]);

// console.log(tinderUser);

// How to merge objects with each other.
// We can do this by using Object.assign()

let obj1 = {
    1: "a",
    2: "b"
}
let obj2 = {
    3: "c",
    4: "d"
}
let obj3 = {
    5: "e",
    6: "f"
}

let obj4 = Object.assign({}, obj1, obj2, obj3); /* This method takes two type of parameters. the first one is the target object and the second one is/are the source object(s). For example if I wrote:
Object.assign(obj1, obj2, obj3); all the data of obj2 and obj3 will be stored in obj1, So, it is better to give an empty object.*/
// console.log(obj4);

// You can also use spread to do this also. 

let obj5 = { ...obj1, ...obj2, ...obj3 }; // This method is a lot easier than Object.assign().
// console.log(obj5);

// Other important methods

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // True
// console.log(tinderUser.hasOwnProperty("isLogged")); // False



// de-structuring of Objects

let course = {
    courseName: "Chai aur Code JavaScript",
    coursePrice: "999",
    courseInstructor: "Shish Fruitwala",
}

// To access value we often use this syntax:
// console.log(course.courseName);
// //or
// console.log(course["courseName"]);
// But there is another simple and clean syntax 

let { courseName } = course;
console.log(courseName);
// You can even rename it: 
let { courseInstructor: instructor } = course;
console.log(instructor)