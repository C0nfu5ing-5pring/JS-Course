let football_players = ["Messi", "Camavinga", "Dybala"];
let cricket_players = ["Virat Kohli", "Dhoni", "Rohit Sharma"];

// football_players.push(cricket_players);
// console.log(football_players); // Example how array can also accept another array.
// Here, the 3rd element is the second array (cricket_players)
// We can access it just like we access any other element.
// console.log(football_players[3]); // We get entire second array as an output but if we want a specific element from the array we can also do that.
// console.log(football_players[3][0]); // "Virat Kohli"
// But this type of merger is not a good practice. Instead we can use a better method that is


// .concat(). What it does is, it combines two or more arrays and returns a new array without modifying any existing arrays whereas .push() made changes in original array itself.
// let all_players = football_players.concat(cricket_players);
// console.log(all_players);


// There is also another method that is easy and simple to understand and it is .spread(). Remember one thing, when we drop a cup, what does it do? It falls down and spreads. 
// Here is an example.
// const all_new_players = [...football_players, ...cricket_players];
// console.log(all_new_players);
// What it does is, it spreads all the elements and makes them individual. 


// let another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// To handle these type of situations we can use another method that returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. It takes an input which is used to determine the depth to be flattened. Suppose you wrote .flat(2) it will only flatten values upto 2 depths.
// let usable_another_array = another_array.flat(Infinity);
// console.log(usable_another_array);

// You can also check whether it is an array or not
// console.log(Array.isArray("Shish")); // false
// To convert something into an array we can do this...
// console.log(Array.from("Shish")); // [ 'S', 'h', 'i', 's', 'h' ]
// console.log(Array.from({name: "Shish"})); // Gives out an empty array because it cannot convert it into an array. #Interesting.

// To convert values into arrays.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
// What .of() does is, if takes a set of elements and returns a new array.