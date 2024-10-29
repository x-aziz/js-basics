// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue (1/0 operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await,
function func1(Callbacks) {
  setInterval(() => {
    console.log("task1");
    Callbacks()
  }, 3000);
}
function func2() {
    console.log("task2");
    console.log("task3");
    console.log("task4");}
    func1(func2);
