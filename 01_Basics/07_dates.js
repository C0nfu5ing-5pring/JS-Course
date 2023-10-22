// Dates

const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString("en-IN"));
// console.log(myDate.toLocaleTimeString("en-IN"));
// console.log(typeof(myDate)); // Date is an object

// const myCreatedDate = new Date(2023, 0, 31, 15, 45); // Months in JS starts with 0. 
const myCreatedDate = new Date("01-14-2023"); // Here months start from 1.
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = new Date();
// console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleTimeString("en-IN"));
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date("12-10-2023");
console.log(newDate.getDay()); // Gives out days from the date.
console.log(newDate.getFullYear()); // Gives out year from the date.
console.log(newDate.getHours()); // Gives out hours from the date.
console.log(newDate.getMinutes()); // Gives out minutes from the date.
console.log(newDate.getSeconds()); // Gives out seconds from the date.
console.log(newDate.getMonth() + 1); // Gives out month from the date.

// `${newDate.getMoth()+1} and the year is...`

// To customise LocaleString
const dateNew = newDate.toLocaleString("default", {
    weekday: "short",
    month: "numeric",
    timeZone: "IST"
});
console.log(dateNew);   