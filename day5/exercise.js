//Challenge 1: Sum of numbers
//Write a program that calculates the sum of all numbers from 1 to 100.
let total = 0;
for( let i = 0;i<=100; i++){
    total = total +i;

}
console.log(total);
//Challenge 2: Multiplication table
//Ask yourself how you could print the multiplication table of any number from 1 to 10
const num = 8;
for(let j = 1;j<=10;j++){
    console.log(`${num}x ${j} = ${num * j}`);
}
//Challenge 3: Count even numbers
//Count the even numbers from 1 to 50 and print the count.
let totalSum = 0;
for(k = 2;k<=50;k++){
     
    if(k % 2 == 0){
        console.log(k);
        totalSum = totalSum + k;
    }
    
}

console.log(totalSum);
//Challenge 4: Factorial
const numb = 5;
let factorial = 1;
for(let p = 1; p<=numb;p++){
    factorial = factorial * p;

}
console.log(`factorial of ${numb} is ${factorial}`);
//Challenge 5: Pattern printing
for (let row = 1; row <= 5; row++) {
  let line = "";

  for (let col = 1; col <= row; col++) {
    line += "*";
  }

  console.log(line);
}
