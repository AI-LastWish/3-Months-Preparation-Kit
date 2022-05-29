// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr: number[]): void {
  // Write your code here
  let result = [0, 0, 0]
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0)
          result[0]++
      else if (arr[i] < 0)
          result[1]++
      else 
          result[2]++
  }
  for(let i = 0; i < result.length; i++){
      console.log(Number(result[i] / arr.length).toFixed(6))
  }
}