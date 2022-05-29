// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6   =>  |1 + 5 + 9 - 3 + 5 + 9| = 2
// 7 8 9 

function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let leftToRight = 0, rightToLeft = 0
  for(let i = 0; i < arr.length; i++){
      leftToRight += arr[i][i]
      rightToLeft += arr[i][arr.length - 1 - i]
  }
  return Math.abs(leftToRight - rightToLeft)
}