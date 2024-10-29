// Exercises: Level 2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
console.log("Q1 :--------------------------------");
let solveLinEquation = (a, b, c, x, y) => {
  console.log("Linear equation is : " + (a * x + b * y + c));
};
solveLinEquation(2, 3, 4, 3, 2);
// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0.
//  Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
console.log("Q2 :--------------------------------");
let solveQuadratic = (a, b, c) => {
  let x1, x2;
  let Quadratic = Math.pow(b, 2) - 4 * a * c;
  if (a === undefined || b === undefined || c === undefined) {
    return {
      0: "Please provide valid coefficients for the quadratic equation.",
    };
  } else if (Quadratic == 0) {
    x0 = -b / (2 * a);
    return { x0 };
  } else if (Quadratic > 0) {
    x1 = (-b + Math.sqrt(Quadratic)) / (2 * a);
    x2 = (-b - Math.sqrt(Quadratic)) / (2 * a);
    return { x1, x2 };
  } else {
    return 0;
  }
};
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic());
// 3. Declare a function name printArray. It takes array as a parameter and it
// prints out each value of the array.
console.log("Q3 :--------------------------------");
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`[${array[i]}]`);
  }
}
printArray(array1);
// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08
// using the Date object.showDateTime()
console.log("Q4 :--------------------------------");
let showDateTime = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + date.getMonth()).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  console.log(`${day}/${month}/${year}`);
};
showDateTime();
// 5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
console.log("Q5 :--------------------------------");
let swapValues = (x, y) => {
  let z = x;
  x = y;
  y = z;
  console.log("x = " + x, "y = " + y);
};
swapValues(3, 4);
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
console.log("Q6 way1 :--------------------------------");
function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));
console.log("Q6 way2 :--------------------------------");
console.log(array1.reverse());
// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
console.log("Q7 :--------------------------------");
const array = ["s", "a", "i", "d", "a", "z", "i", "z"];
let capitalizeArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
};
console.log(capitalizeArray(array));
// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
console.log("Q8 :--------------------------------");
function addItem(item) {
  if (item == undefined) {
    return "Error: No item provided";
  }
  if (item !== null && item !== undefined) {
    let newArray = Array.isArray(item) ? item.slice() : [item];
    return newArray;
  } else {
    return "Error: Invalid item";
  }
}
console.log(addItem("aziz"));
// 9. Declare a function name removeItem. It takes an index parameter and it
// returns an array after removing an item
console.log("Q9 :--------------------------------");
function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(removeItem(array, 3));
// 10. Declare a function name sumOfNumbers. It takes a number parameter and
// it adds all the numbers in that range.
console.log("Q10 :--------------------------------");
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(3));
// 11. Declare a function name sumOfOdds. It takes a number parameter and it
// adds all the odd numbers in that - range.
console.log("Q11 :--------------------------------");
function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(7));
// 12. Declare a function name sumOfEven. It takes a number parameter and it
// adds all the even numbers in that - range.
console.log("Q12 :--------------------------------");
function sumOfEven(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(7));
// 13. Declare a function name evensAndOdds . It takes a positive integer as
// parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51
console.log("Q13 way1:--------------------------------");
let evensAndOdds1 = (number) => {
  if (number >= 0) {
    let countsEvens = 0;
    let countsOdds = 0;
    for (let i = 0; i < number; i++) {
      if (i % 2 == 0) {
        countsEvens++;
      } else {
        countsOdds++;
      }
    }
    console.log("The number of evens are : " + countsEvens);
    console.log("The number of odds are : " + countsOdds);
  } else {
    console.log("pleas enter positive number");
  }
};
evensAndOdds1(7);
// 14. Write a function which takes any number of arguments and return the sum of the arguments
console.log("Q14 :--------------------------------");
function sumArguments(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sumArguments(1, 2, 3, 4));
// 15. Write a function which generates a randomUserIp.
console.log("Q15 way1:--------------------------------");
let randomUserIp = () => {
  let UserIp =
    Math.round(Math.random(1) * 256) +
    " . ".trim() +
    Math.round(Math.random(1) * 256) +
    " . ".trim() +
    Math.round(Math.random(1) * 256) +
    " . ".trim() +
    Math.round(Math.random(1) * 256);
  console.log(UserIp);
};
randomUserIp();
console.log(randomMacAddress());
console.log("Q15 way3:--------------------------------");
const randomUserIp2 = () => {
  const randomPart = () => Math.floor(Math.random() * 256);
  return `${randomPart()}.${randomPart()}.${randomPart()}.${randomPart()}`;
};
console.log(randomUserIp2());
// 16. Write a function which generates a randomMacAddress
console.log("Q16 way1 :--------------------------------");
function randomMacAddress() {
  var randomNumber1 = Math.floor(Math.random() * 26);
  var randomAlphabet1 = String.fromCharCode(97 + randomNumber1);
  var randomNumber2 = Math.floor(Math.random() * 26);
  var randomAlphabet2 = String.fromCharCode(97 + randomNumber2);
  var randomNumber3 = Math.floor(Math.random() * 26);
  var randomAlphabet3 = String.fromCharCode(97 + randomNumber3);
  var randomNumber4 = Math.floor(Math.random() * 26);
  var randomAlphabet4 = String.fromCharCode(97 + randomNumber4);
  var randomNumber5 = Math.floor(Math.random() * 26);
  var randomAlphabet5 = String.fromCharCode(97 + randomNumber5);
  var randomNumber6 = Math.floor(Math.random() * 26);
  var randomAlphabet6 = String.fromCharCode(97 + randomNumber6);
  return console.log(
    Math.floor(Math.random() * 10) +
    randomAlphabet1.toUpperCase() +
    ":" +
    Math.floor(Math.random() * 10) +
    randomAlphabet2.toUpperCase() +
    ":" +
    Math.floor(Math.random() * 10) +
    randomAlphabet3.toUpperCase() +
    ":" +
    Math.floor(Math.random() * 10) +
    randomAlphabet4.toUpperCase() +
    ":" +
    Math.floor(Math.random() * 10) +
    randomAlphabet5.toUpperCase() +
    ":" +
    Math.floor(Math.random() * 10) +
    randomAlphabet6.toUpperCase()
  );
}
randomMacAddress();
console.log("Q16 way2:--------------------------------");
function randomMacAddress2() {
  const mac = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
  ).join(":");
  return mac.toUpperCase();
}
console.log(randomMacAddress2());
// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number.
//  The function return the hexadecimal number.console.log(randomHexaNumberGenerator());. '#ee33df'
console.log("Q17 way1:--------------------------------");
function randomHexaNumberGenerator() {
  const hexadecimal = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
  );
  return hexadecimal.toUpperCase();
}
console.log(randomHexaNumberGenerator());
console.log("Q17 way2:--------------------------------");
function randomHexaNumberGenerator() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}
// 18. Declare a function name userIdGenerator. When this function is called it
// generates seven character id. The function return the id.
// console.log(userIdGenerator()); 41XTDbE
console.log("Q18 way1:--------------------------------");
function userIdGenerator() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(7, "0")
    .toUpperCase();
}
console.log(userIdGenerator());
console.log("Q18 way2:--------------------------------");
function userIdGenerator2() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}