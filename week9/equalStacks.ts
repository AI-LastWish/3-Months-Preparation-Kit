function equalStacks(h1: number[], h2: number[], h3: number[]): number {
  // Write your code here
  let sum1 = h1.reduce((x, y) => x + y, 0)
  let sum2 = h2.reduce((x, y) => x + y, 0)
  let sum3 = h3.reduce((x, y) => x + y, 0)
  while(sum1 !== sum2 || sum2 !== sum3){
      let minSum = Math.min(sum1, sum2, sum3)
      if(sum1 > minSum) sum1 -= h1.shift()!
      if(sum2 > minSum) sum2 -= h2.shift()!
      if(sum3 > minSum) sum3 -= h3.shift()!
  }
  return sum1
}