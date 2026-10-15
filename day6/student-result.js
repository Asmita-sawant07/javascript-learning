function calculateTotal(marks1,marks2,marks3){
    return marks1+marks2+marks3;
}
function calculatePercentage(total,maximumMarks){
    return(total/maximumMarks) * 100;
}
function getGrade(percentage){
    if (percentage >= 90) {
    return "A";
  } else if (percentage >= 75) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 40) {
    return "D";
  } else {
    return "F";
  }
}
function displayResult(name, mark1, mark2, mark3) {
  const total = calculateTotal(mark1, mark2, mark3);
  const percentage = calculatePercentage(total, 300);
  const grade = getGrade(percentage);
  console.log("===== STUDENT RESULT =====");
  console.log("Name:", name);
  console.log("Total:", total, "/ 300");
  console.log("Percentage:", percentage.toFixed(2) + "%");
  console.log("Grade:", grade);
}
displayResult("Student One", 85, 90, 80);
displayResult("Student Two", 65, 70, 75);
displayResult("Student Three", 25, 30, 20);