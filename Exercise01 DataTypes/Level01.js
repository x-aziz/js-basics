// ctrl+k ctrl+0 close all functions
// ### **Exercise: Level 1**
// 1. Declare a variable named challenge and assign it to an initial value **'** Full stack JS track **'**.
let challenge = "full stack Js track ";
// 2. Print the Stringing on the browser console using **console.log()**
console.log(challenge);
// 3. Print the **length** of the Stringing on the browser console using *console.log()*
console.log(challenge.length);
// 4. Change all the Stringing characters to capital letters using **toUpperCase()** method
console.log(challenge.toUpperCase());
// 4. Change all the Stringing characters to capital letters using **toLowerCase()** method
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the Stringing using **subString()** or **subStringing()** method
console.log(challenge.substring(4, 19));
// 7. Slice out the phrase Full stack from Full stack JS track .
console.log(challenge.slice(10));
// 8. Check if the Stringing contains a word **Script** using **includes()** method
console.log(challenge.includes("Script"));
// 9. Split the **Stringing** into an **array** using **split()** method
console.log(challenge.split(""));
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the Stringing at the comma and change it to an array.
let SM = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
console.log(SM.split(","));
// 12. Change Full stackJS track  to Full stackJS group using **replace()** method.
console.log(challenge.replace("track", "group"));
// 13. What is character at index 15 in 'Full stack JS track ' Stringing? Use **charAt()** method.
console.log(challenge.charAt(15));
// 14. What is the character code of J in 'Full stack JS track ' Stringing using **charCodeAt()**
console.log(challenge.charCodeAt(11));
// 15. Use **indexOf** to determine the position of the first occurrence of **a** in Full stackJS track
console.log(challenge.indexOf("a"));
// 16. Use **lastIndexOf** to determine the position of the last occurrence of **a** in Full stackJS track
console.log(challenge.lastIndexOf("a"));
// 17. Use **indexOf** to find the position of the first occurrence of the word **because** in the following
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
// 18. Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
console.log(sentence.lastIndexOf("because"));
// 19. Use **search** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
console.log(sentence.search("because"));
// 20. Use **trim()** to remove any trailing whitespace at the beginning and the end of a String.E.g ' 30 Days Of JavaScript '.
let string = " 30 Days Of JavaScript ";
console.log(string.trim());
// 21. Use **startsWith()** method with the string Full stackJS track  and make the result true
console.log(challenge.startsWith("full"));
// 22. Use **endsWith()** method with the string Full stackJS track  and make the result true
console.log(challenge.endsWith("track"));
// 23. Use **match()** method to find all the **a**’s in 30 Days Of JavaScript
console.log("=====================");
console.log(string.match("a"));
// 24. Use **concat()** and merge 'full stack ' and 'JavaScript' to a single string, 'Full stack JS track'
let fs = "full stack ";
let js = "javaScript";
console.log(fs.concat(js));
// 25. Use **repeat()** method to print Full stackJS track 2 times
console.log(challenge.repeat(2));
