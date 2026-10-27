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