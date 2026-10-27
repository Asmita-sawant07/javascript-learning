const studentNames = ["Aarav", "Priya", "Rahul", "Neha"];
const marks = [85, 92, 67, 78];
function displayStudents(){
    console.log("===== STUDENT MARKS =====");
    for (let i = 0; i < studentNames.length; i++) {
  console.log((i + 1) + ". " + studentNames[i] + " - " + marks[i]);
}
    }
    function calculateTotal() {
  let total = 0;

for (const mark of marks) {
    total += mark;
  }

  return total;
}

function calculateAverage() {
  if (marks.length === 0) {
    return 0;
  }

  return calculateTotal() / marks.length;
}

function findHighestMark() {
  if (marks.length === 0) {
    return null;
  }

  let highest = marks[0];

  for (const mark of marks) {
    if (mark > highest) {
      highest = mark;
    }
  }

  return highest;
}

displayStudents();

console.log("Total marks:", calculateTotal());
console.log("Average marks:", calculateAverage());
console.log("Highest mark:", findHighestMark());
displayStudents();
