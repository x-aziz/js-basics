// ### **Exercises: Level 1**
// 1. Create an empty object called dog
console.log("Q1:------------------------");
const dog = {};
// 2. Print the the dog object on the console
console.log("Q2:------------------------");
console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return *woof woof*
console.log("Q3:------------------------");
dog.name = "fox";
dog.legs = "4";
dog.color = "white";
dog.bark = function () {
    return "woof woof";
};
// 4. Get name, legs, color, age and bark value from the dog object
console.log("Q4:------------------------");
console.log(dog);
// 5. Set new properties the dog object: breed, getDogInfo
console.log("Q5:------------------------");
dog.breed = "Germany";
dog.getDogInfo = function () {
    return dog.bark();
};
console.log(dog.getDogInfo());
