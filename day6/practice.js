function greet(){
    console.log("Hello! Welcome to JavaScript.");
}
greet();
//You can call the same function multiple times:
function greet() {
  console.log("Hello!");
}
greet();
greet();
greet();
//
function showWelcome() {
  console.log("Welcome to my program!");
  console.log("I am learning JavaScript.");
  console.log("Today is Day 6.");
}

showWelcome();
showWelcome();
//Parameters let a function accept information.
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Asmita");
greet("Rahul");
greet("Priya");
//Multiple parameters
function introduce(name, age) {
  console.log("My name is " + name);
  console.log("My age is " + age);
}
introduce("Asmita", 20);
introduce("Rahul", 21);
//Functions that perform calculations
function add (a,b){
    console.log(a+b);
}
add(10, 20);
add(5, 7);
add(100, 50);
//Here's another example:
function calculateTotal(price,quantity){
    return price * quantity;
}
const firstbill = calculateTotal(100,3);
const secondbill = calculateTotal(50,4);
const combinedTotal = firstbill + secondbill;
console.log("First bill:", firstbill);
console.log("Second bill:", secondbill);
console.log("Combined total:", combinedTotal);
//What happens after return?
//When JavaScript reaches a return statement, it immediately exits that function.
function test() {
  return 10;
  console.log("This will not execute");//The console.log() after return is unreachable.
}
console.log(test());
//Part 4: Function declarations and function expressions
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));
const multipl = function (a, b) {
  return a * b;
};
console.log(multipl(4, 5));
//ARROW
//Modern JavaScript often uses arrow functions. You'll see them frequently in Node.js and Express.
const addd = (a,b) => {
    return a+b;
};
console.log(addd(10, 20));
//short arrow
const double = number => number * 2;
console.log(double(5)); // 10
//question
const cube = number => number*number*number;
console.log(cube(3));
const isEven = number => number%2==0;
console.log(isEven(6));
console.log(isEven(5));
const getFullName = (firstName,lastName) =>`${firstName} ${lastName}` ;
console.log(getFullName("Rahul", "Sharma")); // Rahul Sharma
console.log(getFullName("Priya", "Patil"));
//Part 6: Default parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet("Asmita"); //hello Asmita
greet();// hello guest
//example of defaULT
function calculateBill(price, quantity = 1) {
  return price * quantity;
}
console.log(calculateBill(500, 3)); // 1500
console.log(calculateBill(500));    // 500
//Part 7: Scope — where variables are accessible
//1. Global scope
const appName = "TaskFlow";
function showAppName(){
console.log(appName);
}
showAppName;
//2. Function scope
function calculate() {
  const result = 10 + 20;
  console.log(result);
}

calculate();
//3. Block scope
if (true) {
  let message = "Inside the block";
  console.log(message);
}

