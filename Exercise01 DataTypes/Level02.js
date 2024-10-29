// ### Exercise: Level 3
// 1. Using console.log() print out the following statement:
console.log(
  "the quote 'there is no exercise better for the eart htan reaching down and lifting people up .' by John Holmes teaches us to help one another."
);
// 2. Using console.log() print out the following quote by Mother Teresa:
console.log(
  "Love is not patronizing and charity isn't about pity , it is about love . Charity and love are the "
);
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let x = 10;
console.log(typeof "10" === typeof 10);
console.log(typeof "10" === typeof "10");
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat("9.8"));
console.log(Math.ceil(9.8) == 10);
// 5. Check if 'on' is found in both python and jargon
console.log("python".includes("on") === "jaron".includes("on"));
// 6. *I hope this course is not full of jargon*. Check if *jargon* is in the sentence.
let jargon = "i hope this cours is not full of jargon ";
console.log(jargon.includes("jargon"));
// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));
// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.round(Math.random(50) * 100));
// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.round(Math.random(0) * 255));
// 10. Access the 'JavaScript' string characters using a random number.
console.log(
  "JavaScript".charAt(Math.round(Math.random(0) * "JavaScript".length))
);
