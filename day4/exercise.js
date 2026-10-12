//Challenge 1: Even or odd
const number = 12;
if(number % 2==0){
    console.log("Even")
}
else{
    console.log("odd")
}
//Challenge 2: Largest of two numbers
const num1 = 12;
const num2 = 20;
if(num2>num1){
    console.log("num2 is larger");
}
else if (num1> num2) {
  console.log("num1 is larger");
} else {
  console.log("Both numbers are equal");
}
//Simple login eligibility
//Create two Boolean variables: hasAccount and isAccountActive. Print "Login allowed" only when both are true.
const hasAccount = true;
const isAccountActive = true;
if(hasAccount && isAccountActive){
    console.log("Login allowed");
}
//Challenge 4: Discount calculator
//Create a variable for the shopping amount. Apply a 10% discount if the amount is at least 1,000; otherwise, keep the original amount. Print the final bill.
let bill = 1000;
if(bill>=1000){
    bill = bill -(bill*10/100);
    console.log(bill);
}
else{
    console.log(bill);
}