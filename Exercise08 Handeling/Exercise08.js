// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection
// try {} = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//             ex. close files, close connections, release resources
try {
  const dividend = Number(prompt("enter a dividend number :"));
  const divisor = Number(prompt("enter a devisor number :"));
  if (divisor == 0) {
    throw new Error("your cannot divide by zero");
  }
  if (isNaN(divisor) || isNaN(dividend)) {
    throw new Error("value must be a number");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.log(error);
}
console.log("this will always execute");
