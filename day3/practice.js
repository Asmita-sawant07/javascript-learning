//What is a data type?
let name = "Asmita";
let age = 20;
let score = 95;
console.log(10 + 20);
console.log("10" + "20");
//this "" prints 1020 and without"" prints 30
//underdefined
let city;
//Intentionally empty or oblject
let selectedUser = null;
//Related information grouped together
let student = {
  name: "Asmita",
  age: 20
};
//joining string 
let firstName = "Asmita";
let lastName = "Sawant";
let fullName = firstName + " " + lastName;
console.log(fullName);
//Template literals
//Backticks allow you to place variables directly inside a string using ${...}.
let name1 = "Asmita";
let age1 = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
//boolean
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 === 20); //return true false
//undefined versus null
let email;
console.log(email);
let mail = null;
console.log(mail)
//imp javascript detail
console.log(typeof undefined);
console.log(typeof null);//prints underdefined and object
//The typeof operator
console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);

let city1;
console.log(typeof city1);

console.log(typeof undefined);
console.log(typeof null);
//Arrays and objects: a first look
let fruits = ["mango", "apple", "grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
//An object groups related information using property names and values.
let student1 = {
  name: "Asmita",
  age: 20,
  city: "Mumbai"
};
console.log(student1.name);
console.log(student1.age);