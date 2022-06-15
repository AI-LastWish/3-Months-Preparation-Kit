function getWays(n, c) {
  // Write your code here
  const memo = [1, ...Array(n).fill(0)]
  for(let x of c){
      for(let i = x; i <= n; i++){
          memo[i] += memo[i - x]
      }
  }
  return memo[n]
}