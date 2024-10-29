// Exercise: Level 1
// 1. Declare an array0 array;
let array0 = [];
// 2. Declare an array with more than 5 number of elements
let array1 = [1, 2, 3, 4, 5];
console.log(array1);
// 3. Find the length of your array
console.log(array1.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(array1[0]);
console.log(array1[Math.floor(array1.length / 2)]);
console.log(array1[array1.length - 1]);
// 5. Declare an array called mixedDataTypes, put different data types in the array
// and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "A", true, 3.3, undefined, null, { name: "aziz" }];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//  Print the array using console.log()
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
// 7 Print the number of companies in the array
console.log(itCompanies.length);
// 8. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
// 9. Print out each company
console.log("Q9 way1 :--------------------------");
for (i = 0; i <= itCompanies.length - 1; i++) {
  console.log(itCompanies[i]);
}
console.log("Q9 way2 :--------------------------");
itCompanies.forEach((company) => console.log(company));
// 10. Change each company name to uppercase one by one and print them out
console.log("Q10 :--------------------------");
itCompanies.forEach((company) => console.log(company.toLocaleUpperCase()));
console.log("Q11 :--------------------------");
// 11. Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies.slice(0, itCompanies.length - 1).join(",") +
    " and " +
    itCompanies[itCompanies.length - 1] +
    " are IT companies "
);
// 12 .Check if a certain company exists in the itCompanies array. If it exist return the
// company else return a company is not found
console.log("Q12 way1 :--------------------------");
function checkCompany(nameOfCompany) {
  for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].toLowerCase() === nameOfCompany.toLowerCase()) {
      return console.log(nameOfCompany);
    }
  }
  return console.log("company is not found");
}
checkCompany("amazon");
console.log("Q12 way2 :--------------------------");
const filterArray = () => {
  return itCompanies.filter((company) => {
    const count = company.toLowerCase().split("o").length - 1;
    return count > 1;
  });
};
console.log(filterArray());
// 13. Sort the array using sort() method
console.log("Q13 :--------------------------");
var itCompanies1 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
itCompanies1.sort();
console.log(itCompanies1);
// 14. Slice out the first 3 companies from the array
console.log("Q14 :--------------------------");
let itCompanies2 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies2.slice(0, 3));
console.log("Q15 :--------------------------");
// 15. Reverse the array using reverse() method
let itCompanies3 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies3.reverse());
// 16. Slice out the last 3 companies from the array
console.log("Q16 :--------------------------");
let itCompanies4 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies4.slice(-3));
// 17. Slice out the middle IT company or companies from the array
console.log("Q17 :--------------------------");
let itCompanies5 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(
  itCompanies5.slice(
    Math.floor(itCompanies.length / 2),
    Math.floor(itCompanies.length / 2) + 1
  )
);
// 18 Remove the first IT company from the array
console.log("Q18 :--------------------------");
let itCompanies6 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
itCompanies6.shift(0);
console.log(itCompanies6);
// 19 Remove all IT companies
let itCompanies7 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
itCompanies7.splice(0, itCompanies7.length);
console.log(itCompanies7);
