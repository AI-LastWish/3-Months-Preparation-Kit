// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function round5(num: number): number {
  return Math.ceil(num / 5) * 5
}
function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map(grade => grade < 38 ? grade : (round5(grade) - grade < 3 ? round5(grade) : grade))
}