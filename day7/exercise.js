// 1. Sum of array elements
const nums1 = [12, 8, 20, 5, 15];
let sum = 0;

for (const n of nums1) {
  sum += n;
}
console.log("Sum:", sum); 
// 2. Largest and smallest
const nums2 = [34, 12, 89, 5, 47, 21];
let largest = nums2[0];
let smallest = nums2[0];

for (const n of nums2) {
  if (n > largest) {
    largest = n;
  }
  if (n < smallest) {
    smallest = n;
  }
}
console.log("Largest:", largest);   
console.log("Smallest:", smallest);
// 3. Count even and odd
const nums3 = [1, 4, 7, 10, 13, 16, 19, 22];
let even = 0;
let odd = 0;

for (const n of nums3) {
  if (n % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("Even:", even, "Odd:", odd);
// 4. Search for a value
function searchValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(searchValue([10, 20, 30, 40], 30)); 
console.log(searchValue([10, 20, 30, 40], 99));
// 5. Reverse an array using a loop
const original = [10, 20, 30, 40, 50];
const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}
console.log(reversed);