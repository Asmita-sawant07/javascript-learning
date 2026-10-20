//An array lets you store multiple values in a single variable.
const students = ["Aarav", "Priya", "Riya", "Rahul", "Neha"];
console.log(students);
//Arrays can store strings, numbers, booleans, and even objects or other arrays.
const marks = [85, 90, 78, 92];
const colors = ["red", "blue", "green"];
const answers = [true, false, true];
const mixed = ["Asmita", 20, true];
console.log(marks);
console.log(colors);
console.log(answers);
console.log(mixed);
//Access an element using square brackets:
const student = ["Aarav", "Priya", "Riya", "Rahul", "Neha"];
console.log(student[0]); // Aarav
console.log(student[1]); // Priya
console.log(student[3]); // Rahul
console.log(student[10]);//underdefined
//Without running the code, predict the output:
const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits[0]);//apple
console.log(fruits[2]);//banana
console.log(fruits[3]);//orange
console.log(fruits[4]);//underdefined
//Part 3: The length property
const fruit = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruit.length);//4
//fruits[0] gives the first element.
//The last element is at index fruits.length - 1.
const fruitss = ["Apple", "Mango", "Banana", "Orange"];
console.log("First fruit:", fruitss[0]);
console.log("Last fruit:", fruitss[fruitss.length - 1]);
//Part 4: Updating array elements
const fruits1 = ["Apple", "Mango", "Banana"];
fruits1[1] = "Grapes";
console.log(fruits1);
//Part 5: Essential array methods
//1. push() — add to the end
const fruits2 = ["Apple", "Mango"];
fruits2.push("Orange", "Grapes");
console.log(fruits2);
//pop() — remove from the end
const fruits3 = ["Apple", "Mango", "Banana"];
const removedFruit = fruits3.pop();
console.log(removedFruit);
console.log(fruits3);
//3. unshift() — add to the beginning
const fruits4 = ["Mango", "Banana"];
fruits4.unshift("Apple");
console.log(fruits4);
//shift() — remove from the beginning
const fruits5 = ["Apple", "Mango", "Banana"];
const removedFruits = fruits5.shift();
console.log(removedFruits);
console.log(fruits5);
//Part 6: Searching an array
const languages = ["Java", "JavaScript", "Python"];
console.log(languages.includes("JavaScript")); // true
console.log(languages.includes("C++"));        // false
//indexOf()
const languages1 = ["Java", "Python", "JavaScript"];
console.log(languages1.indexOf("Python")); // 1
console.log(languages1.indexOf("C++"));    // -1
//Part 7: Looping through arrays
const fruit1 = ["Apple", "Mango", "Banana", "Orange"];
for (let i = 0; i < fruit1.length; i++) {
  console.log(fruit1[i]);
}
//Method 2: for...of
const fruit2 = ["Apple", "Mango", "Banana", "Orange"];

for (const fruiti of fruit2) {
  console.log(fruiti);//This gives you each element directly, without managing an index.
}
//Method 3: Calculate the sum of array values
const mark1 = [80, 90, 75, 85, 70];

let total = 0;

for (const mark of mark1) {
  total += mark;
}

console.log("Total marks:", total);
console.log("Number of subjects:", mark1.length);
console.log("Average:", total / mark1.length);
//Part 8: More useful methods — slice() and splice()
//slice() — copy part of an array
//slice() returns a new array containing a selected portion. It does not modify the original array.
const numbers = [10, 20, 30, 40, 50];
const selected = numbers.slice(1, 4);
console.log(selected);
console.log(numbers);
//splice() — change the original array
//splice() can remove, replace, or insert elements.
const fruit7 = ["Apple", "Mango", "Banana", "Orange"];
const removed = fruit7.splice(1, 2);
console.log(removed);
console.log(fruit7);
