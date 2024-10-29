// Exercises: Level 3
// 1. Modify question number n . Declare a function name userIdGeneratedByUser.It doesnʼt take any parameter but it takes
// two inputs using prompt(). One of the input is the number of characters
// and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// 'userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
console.log("Q1:--------------------------------");
// function userIdGeneratedByUser1() {
//   let length = parseInt(prompt("Enter the number of characters:"));
//   let count = parseInt(prompt("Enter the number of ids:"));
//   let result = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < count; i++) {
//     for (let j = 0; j < length; j++) {
//       result += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     result += "\n";
//   }
//   console.log(result);
// }
// userIdGeneratedByUser1();
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator() rgb(125,244,255)
console.log("Q2 way1:--------------------------------");
function rgbColorGenerator() {
  let color = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 255)
  ).join(",");
  return "rgb(" + color + ")";
}
console.log(rgbColorGenerator());
console.log("Q2 way2:--------------------------------");
function rgbColorGenerator1() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator1());
// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log("Q3:--------------------------------");
function arrayOfHexaColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push("#" + Math.floor(Math.random() * 0xffff).toString(16));
  }
  return colors;
}
console.log(arrayOfHexaColors(6));
// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log("Q4 way1:--------------------------------");
function arrayOfRgbColors(num) {
  const colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(
      `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`
    );
  }
  return colors;
}
console.log(arrayOfRgbColors(3));
console.log("Q4 way2:--------------------------------");
function arrayOfRgbColors1(num) {
  const colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(rgbColorGenerator());
  }
  return colors;
}
console.log(arrayOfRgbColors1(3));
// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
console.log("Q5:--------------------------------");

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
console.log("Q6:--------------------------------");

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)','rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
console.log("Q7:--------------------------------");
function generateColors(color, num) {
  if (num === 1 && color === "rgb") {
    return rgbColorGenerator1();
  } else {
    if (num === 1 && color === "hexa") {
      return arrayOfHexaColors(1);
    } else {
      if (color === "rgb") {
        return arrayOfRgbColors(num);
      } else if (color === "hexa") {
        return arrayOfHexaColors(num);
      }
    }
  }
}
console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1));
// // 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
console.log("Q8 way1:--------------------------------");
function shuffleArray(array) {
  let shuffleArr = [];
  for (let i = 0; i < array.length; i++) {
    shuffleArr.push(array[Math.floor(Math.random() * array.length)]);
  }
  return shuffleArr;
}
console.log(shuffleArray([4, 7, 8, 0, 5, 4]));
console.log("Q8 way2:--------------------------------");
function shuffleArray1(array) {
  return array.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray1([4, 7, 8, 0, 5, 4]));

// 9. Call your function factorial, it takes a whole number as a parameter and it
// return a factorial of the number
console.log("Q9:--------------------------------");
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
console.log("Q10:--------------------------------");
function isEmpty(param) {
  return !param;
}
// 11. Call your function sum, it takes any number of arguments and it returns the sum.
console.log("Q11:--------------------------------");
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
// 12. Write a function called sumOfArrayItems, it takes an array parameter and
// return the sum of all the items. Check if all the array items are number
// types. If not give return reasonable feedback.
console.log("Q12:--------------------------------");
function sumOfArrayItems(arr) {
  if (!arr.every((item) => typeof item === "number")) {
    return "Array contains non-numeric values";
  }
  return arr.reduce((acc, val) => acc + val, 0);
}
// 13. Write a function called average, it takes an array parameter and returns
// the average of the items. Check if all the array items are number types. If
// not give return reasonable feedback.
console.log("Q13:--------------------------------");
function average(arr) {
  if (!arr.every((item) => typeof item === "number")) {
    return "Array contains non-numeric values";
  }
  return sumOfArrayItems(arr) / arr.length;
}
// 14. Write a function called modifyArray takes array as parameter and modifies
// the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
console.log("Q14:--------------------------------");
function modifyArray(arr) {
  if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else {
    return "Not Found";
  }
}
let a = ["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"];
let b = ["Google", "Facebook", "Apple", "Amazon", "MICROSOFT", "IBM"];
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"])); // 'Not Found'

// 15. Write a function called isPrime, which checks if a number is prime number.
console.log("Q15:--------------------------------");
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// 16. Write a functions which checks if all items are unique in the array.
console.log("Q16:--------------------------------");
function areItemsUnique(arr) {
  return new Set(arr).size === arr.length;
}
// 17. Write a function which checks if all the items of the array are the same data type.
console.log("Q17:--------------------------------");
function areItemsSameDataType(arr) {
  return arr.every((item) => typeof item === typeof arr[0]);
}
// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable isvalid or invalid variable.
console.log("Q18:--------------------------------");
function isValidVariable(variable) {
  const regex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
  return regex.test(variable);
}
// 19. Write a function which returns array of seven random numbers in a range
// of 09. All the numbers must be unique.sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
console.log("Q19:--------------------------------");
function sevenRandomNumbers() {
  let numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 10));
  }
  return [...numbers];
}
// 20. Write a function called reverseCountries, it takes countries array and first it
// copy the array and returns the reverse of the original array
console.log("Q20:--------------------------------");
function reverseCountries(countries) {
  return countries.slice().reverse();
}
