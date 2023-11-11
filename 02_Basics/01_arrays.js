// Arrays
// Array is an object.Arrays in JavaScript are resizable meaning, new elements can be added even after it is declared. It can consist of any datatype (including arrays).

// Different ways of declaring arrays.
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, true, "Shish"]; //Anything put inside the square brackets [] is called element. Element can be of any datatype.
const myPlayers = ["Lionel Messi", "Antoine Griezmann", "Eduardo Camavinga"];
const myArr2 = new Array ("Batsurat Pichai", "Bill Gates", "Elon Musk")
// console.log(myArr[10]);

// Array methods

// myArr.push(9); // Takes one input and adds it to end of an array.
// myArr.push(10);
// myArr.push(11);
// myArr.pop(); // Does not take any input and removes the last element of an array.
// myArr.unshift(9); // Takes input and adds it to the start of an array.
// myArr.shift(); // Does not take any input and removes the first element of an array.
// console.log(myArr);

// questionaire methods that can of JavaScript.

// console.log(myArr.includes(false)); // Takes input and checks whether it is present in the given array or not. Gives output in true and false.  

// console.log(myArr.indexOf("Shish")); // Takes input and gives out the index of the given input in th given array.

// console.log(myArr.indexOf("Aahil")); // Takes input and gives out the index of the given input in th given array. If it does not find the element in the array it will always give output -1.

// const newArr = myArr.join(); // Adds all the elements of an array into a string and binds all the elements.

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, true, 'Shish' ]
// console.log(newArr); // 0,1,2,3,4,5,6,7,8,true,Shish 
// console.log(typeOf(newArr));

//slice(), splice()

// example of splice()

// const newArr1 = [1,2,3,4,5,6,7,8]; 

// console.log(newArr1.splice(1,6));// Gives end to end value and removes that element from the original array.
// console.log(newArr1);


// // example of slice()

// const newArr2 = [1,2,3,4,5,6,7,8];
// console.log(newArr2.slice(1,4)); // Goves values starting from the first value and the element before the last value. Does not remove that element from original array.
// console.log(newArr2);