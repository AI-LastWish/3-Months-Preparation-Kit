function maxSubarray(arr: number[]): number {
  // Write your code here
  let currSum = arr[0], maxSum = arr[0]
  for(let i = 1; i < arr.length; i++){
      currSum += arr[i]
      if(maxSum < currSum) maxSum = currSum
      if(currSum < 0) currSum = 0
  }
  return maxSum
}