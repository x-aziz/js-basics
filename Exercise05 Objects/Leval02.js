// ### **Exercises: Level 2**
// 1. Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
console.log("Q1 way1:------------------------");
function hightSkills() {
  let Alex = users.Alex.skills.length;
  let Asab = users.Asab.skills.length;
  let Brook = users.Brook.skills.length;
  let Daniel = users.Daniel.skills.length;
  let John = users.John.skills.length;
  let Paul = users.Paul.skills.length;
  let Thomas = users.Thomas.skills.length;
  return console.log(
    "the user who has many skills is : " +
      Math.max(Alex, Asab, Brook, Daniel, John, Paul, Thomas)
  );
}
hightSkills();
console.log("Q1 way2:------------------------");
let maxSkills = 0;
let personMaxSkills = "";
for (let i in users) {
  console.log(Object.keys(users));
  if (users[i].skills.length > maxSkills) {
    maxSkills = users[i].skills.length;
    personMaxSkills = i;
  }
}
console.log("the user who has many skills is : " + personMaxSkills + maxSkills);
// 2. Count logged in users,count users having greater than equal to 50 points from the following object.#
console.log("Q2:------------------------");
let countLogged = 0;
let countpoint = 0;
for (let i in users) {
  if (users[i].isLoggedIn === true) {
    countLogged++;
  }
  if (users[i].points >= 50) {
    countpoint++;
  }
}
console.log(
  "in the object users we have : " +
    countLogged +
    " logged in,and " +
    countpoint +
    " users who have more than 50 points"
);
// 1. Find people who are MERN stack developer from the users object
console.log("Q3:------------------------");
const metrnStackDevlopers = [];
for (const i in users) {
  if (
    users[i].skills.includes("MongoDB") &&
    users[i].skills.includes("Express") &&
    users[i].skills.includes("React") &&
    users[i].skills.includes("Node")
  ) {
    metrnStackDevlopers.push(i);
  }
}
console.log(metrnStackDevlopers);
// 2. Set your name in the users object without modifying the original users object
console.log("Q4:------------------------");

users.aziz = {
  email: "aziz@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "c", "matlab", "java"],
  age: 20,
  isLoggedIn: true,
  points: 100,
};
console.log(users);
// 3. Get all keys or properties of users object
console.log("Q5:------------------------");
console.log(Object.keys(users));
// 4. Get all the values of users object
console.log("Q6:------------------------");
console.log(Object.values(users));
// 5. Use the countries object to print a country name, capital, populations and languages.
const countries = {
  USA: {
    capital: "wachngton",
    populations: "300M",
    languages: "English",
  },
  UKA:{
    capital: "LONDON",
    populations: "100M",
    languages: "English",
  }
};
console.log(countries);