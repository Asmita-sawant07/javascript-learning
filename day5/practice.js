//for loop
for (let i = 1; i <= 5; i++) {
  console.log("Hello, JavaScript!");
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//Example 2: Print even numbers
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
//Example 3: Multiplication table
const number = 5;
for( let i=1;i<=10;i++){
    console.log(`${number} x ${i} = ${number*i}`)
}
//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//countdown
let countdown = 5;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
console.log("Go!");
//Part 4 — The do...while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
let numbers = 10;
while (numbers < 5) {
  console.log("While loop ran");//Nothing prints because the condition is false from the beginning.
}
let numbe = 10;
do {
  console.log("Do-while loop ran");
} while (numbe < 5);
//Part 5 — break and continue
//5.1 break stops the loop
for (let l = 1; l <= 10; l++) {
  if (l === 5) {
    break;
  }
  console.log(l);
}
//5.2 continue skips the current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
//Practical example: skip multiples of 3
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
//Part 6 — Nested loops
for (let row = 1; row <= 3; row++) {
  for (let column = 1; column <= 2; column++) {
    console.log(`Row ${row}, Column ${column}`);
  }
}