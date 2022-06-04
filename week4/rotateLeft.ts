// A left rotation operation on an array of size n shifts each of the array's elements  unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

function rotateLeft(d: number, arr: number[]): number[] {
  // Write your code here
  return arr.slice(d).concat(arr.slice(0, d))
}

