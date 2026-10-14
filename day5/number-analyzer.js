const limit = 20;
let evenCount = 0;
let oddCount = 0;
let total = 0;
console.log("===== NUMBER ANALYZER =====");
for (let number = 1; number <= limit; number++) {
  total += number;
  if(number % 2 ==0){
console.log(`${number} is even`);
    evenCount++;
  }
   else {
    console.log(`${number} is odd`);
    oddCount++;
  }
  
}
console.log("===== SUMMARY =====");
console.log("Limit:", limit);
console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);
console.log("Total sum:", total);
  