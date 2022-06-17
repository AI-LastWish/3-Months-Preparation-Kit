function fibonacciModified(t1, t2, n) {
  // Write your code here
  t1 = BigInt(t1)
  t2 = BigInt(t2)
  if(n === 1) return t1
  else if(n === 2) return t2
  let res = t2
  for(let i = 3; i <= n; i++){
    res = t1 + t2 * t2
    t1 = t2
    t2 = res
  }
  return BigInt(res)
}