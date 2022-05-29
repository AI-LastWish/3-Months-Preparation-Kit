// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const map = {}
  let result = 0
  
  for(const i of ar){
      const r = i % k
      result += map[r > 0 ? k - r : 0] || 0
      map[r] = map[r] ? map[r] + 1 : 1
  }
  return result
}
