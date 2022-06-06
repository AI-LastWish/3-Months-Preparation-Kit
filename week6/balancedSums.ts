// arr = [5,6,8,11] => 5+6===11 => YES

function balancedSums(arr: number[]): string {
  // Write your code here
  let currSum = 0, sum = arr.reduce((x, y) => x + y, 0)
  for(let i = 0; i < arr.length; i++){
      if(currSum === sum - currSum - arr[i]) return "YES"
      currSum += arr[i]
  }
  return "NO"
}
