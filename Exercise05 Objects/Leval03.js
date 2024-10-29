// ### **Exercises: Level 3**
// 1 Create an object literal called *personAccount*. It has *firstName, lastName, incomes, expenses* properties
const personAccount = {
  firstName: "SAID",
  lastName: "AZIZ",
  //  Incomes is a set of incomes and its description and
  Incomes: [
    { amount: 499, description: "software engineer" },
    { amount: 300, description: "front end development " },
    { amount: 200, description: "mobile development " },
  ],
  //  expenses is a set of incomes and its description.
  expenses: [
    { amount: 100, description: "food" },
    { amount: 200, description: "gasoline" },
    { amount: 20, description: "electric" },
  ],
  // *totalIncome, totalExpense, accountInfo,addIncome, addExpense* and *accountBalance* methods.
  totalIncome: function () {
    return this.Incomes.reduce((acc, curr) => acc + curr.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
  },
  accountInfo: function () {
    return this.totalExpense + this.totalIncome;
  },
  addIncome: function (amount, description) {
    this.Incomes.push({
      amount,
      description,
    });
    return this.Incomes;
  },
  addExpense: function (amount, description) {
    this.expenses.push({
      amount,
      description,
    });
    return this.expenses;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
console.log("Q1.1:------------------------");
console.log(personAccount.totalIncome());
console.log("Q1.2:------------------------");
console.log(personAccount.totalExpense());
console.log("Q1.3:------------------------");
console.log(personAccount.accountInfo());
console.log("Q1.4:------------------------");
console.log(personAccount.addIncome(300, "backend development"));
console.log("Q1.5:------------------------");
console.log(personAccount.addExpense(20, "electricity bill"));
console.log("Q1.6:------------------------");
console.log(personAccount.accountBalance());
// 1. *** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
// imagine you are getting the above users collection from a MongoDB database.
const userss = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// 1.a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account
function signUp(userss, person) {
  const found = userss.find((u) => u.username === person.username);
  if (found) {
    return "the user is already exist";
  }
  userss.push(person);
  return "the user added sucssasfly ";
}
console.log("Q2.a:------------------------");
console.log(
  signUp(userss, {
    _id: "abcde",
    username: "x_said",
    email: "said@gmail.com",
    password: "12345678",
    createdAt: "04/05/2024 4:00 AM",
    isLoggedIn: false,
  })
);
// 2.b. Create a function called signIn which allows user to sign in to the application
function signIn(userss, username, password) {
  const found = userss.find(
    (u) => u.username === username && u.password === password
  );
  if (found) {
    return "you logged in in successfully";
  }
  return "username or password is not found ";
}
console.log("Q2.b:------------------------");
console.log(signIn(userss, "x_said", "12345678"));
// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(products, userId, rate, productId) {
  const found = products.find((u) => u._id === productId);
  if (found) {
    found.ratings.push(userId, rate);
    return "you rate the product successfully";
  }
  return "product not found ";
}
console.log("Q3.a:------------------------");
console.log(rateProduct(products, "aziz", 5, "eedfcf"));
//  b. Create a function called averageRating which calculate the average rating of a product
const averageRating = (products, productId) => {
  const found = products.find((p) => p._id === productId);
  if (found) {
    if (found.ratings.length === 0) {
      return "No ratings yet";
    }
    const sum = found.ratings.reduce((acc, curr) => acc + curr.rate, 0);
    return sum / found.ratings.length;
  }
  return "Product not found";
};
console.log("Q3.b:------------------------");
console.log(averageRating(products, "eedfcf"));
console.log(averageRating(products, "aegfal"));
// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
console.log("Q4:------------------------");
const likeProduct = (productId, userId) => {
  const found = products.find((u) => u._id === productId);
  if (found) {
    const index = found.likes.indexOf(userId);
    if (index === -1) {
      found.likes.push(userId);
      return "the product liked";
    }
    found.likes.splice(index, 1);
    return "the product disliked ";
  }
};
console.log(likeProduct( "eedfcf",));
console.log(likeProduct( "aegfal",));
console.log("final result------------------------");
console.log(userss);
console.log(products);
