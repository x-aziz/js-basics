// Exercises: Level 1
// .1 Declare a function fullName and it print out your full name.
const myName = (Name) => {
  console.log(Name);
};
myName("aziz");
// .2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstname, lastname) {
  return `${firstname} ${lastname}`;
}
console.log(fullName("said", "aziz"));
// 3. Declare a function addNumbers and it takes two parameters and it returns sum.
function add(a, b) {
  return (sum = a + b);
}
console.log(add(10, 20));
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return (area = length * width);
}
console.log(areaOfRectangle(10, 20));
// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//  Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
  console.log(2 * (length + width));
};
perimeterOfRectangle(10, 20);
// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//  Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
  console.log(length * width * height);
};
volumeOfRectPrism(10, 10, 10);
// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r) => {
  console.log(Math.PI * Math.pow(r, 2));
};
areaOfCircle(3);
//  8. circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
  console.log(2 * Math.PI * r);
};
circumOfCircle(2);
// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
let density = (mass, volume) => {
  console.log(mass / volume);
};
density(10, 2);
// 10. Speed is calculated by dividing the total distance covered by a moving object
// divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let speed = (distence, time) => {
  console.log(distence / time);
};
speed(10, 5);
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write
// a function which calculates weight.
let weight = (mass, gravity) => {
  console.log(mass * gravity);
};
weight(2, 10);
// 12. Temperature in oC can be converted to oF using this formula: oF  (oC x 9/5
// + 32. Write a function which convert oC to oF convertCelciusToFahrenheit
let convertCelciusToFahrenheit = (oC) => {
  console.log("oF=" + (oC * 9) / 5 + 32);
};
convertCelciusToFahrenheit(20);
// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x  height) in m:. Write a function which calculates bmi. BMI is used to broadly
//   define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//   The same groups apply to both men and women.
//   Underweight: BMI is less than 18.5
//   Normal weight: BMI is 18.5 to 24.9
//   Overweight: BMI is 25 to 29.9
//   Obese: BMI is 30 or more
let calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi;
};
let evaluateBMI = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};
let Weight = 100;
let height = 1.5;
let bmi = calculateBMI(Weight, height);
console.log("BMI = " + bmi.toFixed(2) + " kg/m^2");
let weightCategory = evaluateBMI(bmi);
console.log("Weight category: " + weightCategory);
//  14. Write a function called checkSeason, it takes a month parameter and returns
// the season:Autumn, Winter, Spring or Summer.
let checkSeason = (month) => {
  if (month >= 4 && month <= 6) {
    console.log("spring");
  } else if (month >= 7 && month <= 9) {
    console.log("summer");
  } else if (month >= 10 && month <= 12) {
    console.log("autumn");
  } else if (month >= 1 && month <= 3) {
    console.log("winter");
  }
};
checkSeason(4);
// 15. Math.max returns its largest argument. Write a function findMax that takes
// three arguments and returns their maximum with out using Math.max method.
let findMax=(n,m,s)=>{
  if(n>m&&n>s){
    console.log("maximum is : "+n);
  }else if(m>n&&m>s){
    console.log("maximum is : "+m);
  }else{
    console.log("maximum is : "+s);
  }
}
findMax(20, 10, 115);
