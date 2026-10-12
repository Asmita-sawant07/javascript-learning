/*const principal = 1000;
const rate = 5;
const time = 2;

const simpleInterest = (principal * rate * time) / 100;

console.log("Simple interest:", simpleInterest);*/
const account ={
    principal: 100,
    rate:5,
    time:2,
}
account.simpleInterest = (account.principal * account.rate * account.time) / 100;

console.log(account.simpleInterest);
//or
/*const principal = 100;
const rate = 5;
const time = 2;

const account = {
    principal: principal,
    rate: rate,
    time: time,
    simpleInterest: (principal * rate * time) / 100
};

console.log(account.simpleInterest);*/
//Increment and decrement
let count = 5;
count++;
console.log(count);
count--;
console.log(count);
//Comparison operators
console.log(10>5);
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 3); 
//Equality: === versus ==
console.log(5 === 5);//true
console.log(5 === "5");//false
console.log(2**4);
//Part 3 — Logical operators
//3.1 AND: &&
const age = 20;
const hasID = true;
console.log(age >= 18 && hasID);//true
//3.2 OR: ||
const hasStudentCard = false;
const hasLibraryPass = true;
console.log(hasStudentCard || hasLibraryPass);
//3.3 NOT: !
const isLoggedIn = false;
console.log(!isLoggedIn);
//Part 4 — Making decisions with if...else
const mark = 60;
if(mark>=40){
    console.log("You passed")
}
else{
     console.log("You did not pass.");
}
//else if: multiple decisions
const marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}
//Part 6 — Nested conditions
const isLoggedInn = true;
const isAdmin = false;

if (isLoggedInn) {
  console.log("Welcome!");

  if (isAdmin) {
    console.log("Admin dashboard");
  } else {
    console.log("Regular user dashboard");
  }
} else {
  console.log("Please log in.");
}
//Part 7 — The ternary operator
//General structure:
//condition ? valueIfTrue : valueIfFalse
const ages = 17;
const message = ages>=18 ? "Adult" : "Under 18";
console.log(message);
//or
/*This is equivalent to:
const age = 20;
let message;

if (age >= 18) {
  message = "Adult";
} else {
  message = "Under 18";
}

console.log(message);*/




