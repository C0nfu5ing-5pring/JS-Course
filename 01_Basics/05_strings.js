const name = "Shish";
const repoCount = 15;

// console.log(name + repoCount + " Value"); // Outdated

// We can use `` instead
// console.log(`Hello my name is ${name} and I have ${repoCount} repositories on GitHub.`);

const gameName = new String("Shish");
// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // to know the letter at position 2
// console.log(gameName.indexOf("s")); // to know at which position the letter "i" is

const newString = gameName.substring(0,3); // selects all the letters between index 1 and 3
// console.log(newString);

const anotherString = gameName.slice(0,3); // we can only use negative values in .slice()

const newStringOne = "           shish          ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Only removes extra white space and line terminators.


let url = "https://www.youtube.com"
url = url.replace("youtube", "google"); // .replace(whatToReplace, replaceInto)
console.log(url.includes("aahil")); // checks whether it has something. Answers are given as     boolean
console.log(url);


console.log(url.split(".")); //splits things into bases of what is written in the parameter.
// Program using .toUpperCase(), .toLowerCase() and .trim()
// let userName = "                   AAHIL";
// userName = userName.trim();
// console.log(userName[0].toUpperCase() + userName.substring(1, userName.length).toLowerCase());
