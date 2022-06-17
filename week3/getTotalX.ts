function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  let res = 0
  for(let i = 1; i <= 100; i++){
      if(a.every(x => i % x === 0)){
          if(b.every(x => x % i === 0))
            res++
      }
  }
  return res
}