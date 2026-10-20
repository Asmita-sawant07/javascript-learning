//Calculator functions
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
console.log(add(20, 5)); 
console.log(mul(20, 5)); 
console.log(sub(20, 5)); 
console.log(div(20, 5)); 
//Even or odd
const isEven = (num) => num % 2 === 0;
console.log(isEven(8));
console.log(isEven(13));
console.log(isEven(0));
// Find the largest number
function findLargest(a,b,c){
    let largest = a;
    if(b>largest){
    largest = b;
    }
    if(c>largest){
     largest = c;
    }
      return largest;

}
console.log(findLargest(12, 45, 23));  
console.log(findLargest(90, 10, 60));  
console.log(findLargest(7, 7, 3)); 
//Factorial using a function
function factorial(number){
  let result = 1;
  for(i=1;i<=number;i++){
    result = result*i;
  }
  return result;
}
console.log(factorial(5));  // 120
console.log(factorial(4));  // 24
console.log(factorial(0));  // 1
//Shopping bill 
function calculateFinalBill(price, quantity, discountPercent = 0){
  const subtotal = price*quantity;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finaltotal =subtotal - discountAmount;
  return finaltotal
}
console.log(calculateFinalBill(200, 3, 10));  // 540
console.log(calculateFinalBill(200, 3));      // 600