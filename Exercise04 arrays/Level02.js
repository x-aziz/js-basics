// Exercise: Level 2
console.log("Q1:------------------------");
// 2. First remove all the punctuations and change the string to array and count the
// number of words in the array
console.log("Q2:------------------------");
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
console.log(words.length);
// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log("Q3.1:------------------------");
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
//3.2 add Sugar at the end of you shopping cart if it has not been already added
console.log("Q3.2:------------------------");
if (!shoppingCart.includes("sugar")) {
  shoppingCart.push("sugar");
}
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
console.log("Q3.3:------------------------");
if (shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);
// modify Tea to 'Green Tea'
console.log("Q3.4:------------------------");
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
console.log("Q4:------------------------");
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
if (countries.includes("Ethiopia") == true) {
  console.log("Ethiopia".toUpperCase());
} else {
  countries.push("Ethiopia");
}
// 5. In the webTechs array check if Sass exists in the array and if it exists print
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array
console.log("Q5:------------------------");
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// if (webTechs.includes("Sass") == true) {
//   console.log("Sass is a CSS preprocess");
// } else {
//   webTechs.push("Sass");
//   console.log(webTechs);
// }
webTechs.includes("Sass") == true
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push("Sass"),
  console.log(webTechs);
// Concatenate the following two variables and store it in a fullStack variable.
console.log("Q6:------------------------");
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
