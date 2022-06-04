// Given an array of integers, find the minimum absolute difference between any two elements in the array.

function minimumAbsoluteDifference(arr: number[]): number {
  // Write your code here
  arr.sort((x, y) => x - y)
  let min = Infinity
  for(let i = 0; i < arr.length - 1; i++){
      const absDiff = arr[i + 1] - arr[i]
      if(min > absDiff) min = absDiff
  }
  return min
}