// arr = [5, 2, 3, 4, 1] => [1,2,2,3,3,4,4,5]

function closestNumbers(arr: number[]): number[] {
  // Write your code here
  let pairs = [], minDiff = Infinity
  arr.sort((x, y) => x - y)
  for(let i = 0; i < arr.length - 1; i++){
      const diff = arr[i + 1] - arr[i]
      if(minDiff > diff) pairs = [], minDiff = diff
      if(minDiff === diff) pairs.push(arr[i], arr[i + 1])
  }
  return pairs
}