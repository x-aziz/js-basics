// Exercise: Level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// 1.1 Sort the array and find the min and max age
console.log("Q1.1 way1:------------------------");
const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages1);
let min = ages[0];
let max = ages[ages.length - 1];
console.log("min is : " + min);
console.log("max is : " + max);
console.log("Q1.1 way2:------------------------");
console.log("min is : " + Math.min(...ages));
console.log("max is : " + Math.max(...ages));
// 1.2 Find the median age(one middle item or two middle items divided by two)
console.log("Q1.2:------------------------");
const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages2.sort((a, b) => a - b);
const middle = Math.floor(ages2.length / 2);
const medianAge =
  ages2.length % 2 === 0
    ? console.log(
        "the median age is : " + (ages2[middle - 1] + ages2[middle]) / 2
      )
    : console.log("the median age is : " + ages2[middle]);
// 1.3 Find the average age(all items divided by number of items)
console.log("Q1.3:------------------------");
let sum = 0;
for (i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}
let average = sum / ages.length;
console.log("the average age is : " + average);
// 1.4 Find the range of the ages(max minus min)
console.log("Q1.4:------------------------");
console.log("range : " + (max - min));
// 1.5 Compare the value of (min - average) and (max - average), use abs() method
console.log("Q1.5:------------------------");
console.log(
  "the value of min and max minus average : " +
    Math.abs(min - average) +
    " " +
    Math.abs(max - average)
);
// 1.6 Slice the first ten countries from the countries array
console.log("Q1.6:------------------------");
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
console.log(countries.slice(0, 10));
// 2 Find the middle country(ies) in the countries array
console.log("Q2:------------------------");
console.log(
  "the middle country is : " + countries[Math.floor(countries.length / 2)]
);

// 3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
console.log("Q3:------------------------");
let array3;
let array4;
if (countries.length % 2 === 0) {
  array3 = countries.slice(0, Math.floor(countries.length / 2));
  array4 = countries.slice(Math.floor(countries.length / 2));
  console.log(array3);
  console.log(array4);
} else {
  array3 = countries.slice(0, Math.floor(countries.length / 2) + 1);
  console.log(array3);
}
