// ### **Exercises: Level 1**
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Said";
let lastName = "Aziz";
let country = "Algeria";
let city = "Algeria capital";
let age = 20;
let isMarried = false;
let year = 2004;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
// 2. Check if type of '10' is equal to 10
console.log(typeof "10" === typeof 10);
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseFloat("9.8") == 10);
// 4. Boolean value is either true or false.
//     1. Write three JavaScript statement which provide truthy value.
//     2. Write three JavaScript statement which provide falsy value.
console.log(typeof 10 === typeof Math.random());
console.log(typeof "10" === typeof Math.random());
// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
//. Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length != "dragon".length);
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
// There is no 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on"))); // false
// 7. Use the Date object to do the following activities
let date = new Date();
//     1. What is the year today?
console.log(date.getFullYear());
//     2. What is the month today as a number?
console.log(date.getMonth() + 1);
//     3. What is the date today?
console.log(date.getDate());
//     4. What is the day today as a number?
console.log(date.getDay());
//     5. What is the hours now?
console.log(date.getHours());
//     6. What is the minutes now?
console.log(date.getMinutes());
//     7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
// Create a Date object representing the current date and time
var currentDate = new Date();
// Create a Date object representing January 1, 1970
var januaryFirst1970 = new Date(1970, 0, 1);
// Calculate the difference between the current date and January 1, 1970, in milliseconds
var millisecondsElapsed = currentDate - januaryFirst1970;
// Convert milliseconds to seconds
var secondsElapsed = millisecondsElapsed / 1000;
// Print the number of seconds elapsed
console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);