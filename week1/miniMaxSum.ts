// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr: number[]): void {
  // Write your code here
  let indexMin = 0, indexMax = 0, sum = 0
  for(let i = 0; i < arr.length; i++){
      sum += arr[i]
      if(arr[i] < arr[indexMin]) indexMin = i
      if(arr[i] > arr[indexMax]) indexMax = i
  }
  console.log(sum - arr[indexMax], sum - arr[indexMin])
}
