//Exercise 1: Predict the output
console.log(typeof "Node.js");
console.log(typeof 100);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);//string,number,boolean,undefined,object
//Exercise 2: String or number?
let a = "20";
let b = 10;

console.log(a + b);
console.log(Number(a) + b);//Number(a) converts the string "20" into the number 20.
//output 2010 and 30
//Fix the bug
//A shopping application has this code:
let price = "150";// change "150" to 150
let quantity = 3;

console.log(price * quantity);
//Exercise 5: Student object
//Create an object with these properties:
const student = {
    name: "Asmita",
    age: 19,
    course: "cs",
    isLearning: true

}
console.log("====STUDENT INFO====");
console.log(student);