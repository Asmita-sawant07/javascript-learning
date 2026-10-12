const studentName = "Asmita";
const marks = 82;
console.log("====STUDENT RESULT====");
console.log(`Student:${studentName}`);
console.log(`Marks: ${marks}`);
if(marks < 0||marks>100){
    console.log("Invalid marks");
}
else if(marks>=90){
    comsole.log("Grade: A");
}else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("Result: Fail");
}
