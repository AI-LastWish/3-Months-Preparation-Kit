function stockmax(prices: number[]): number {
  // Write your code here
  let max = prices.pop()
  let profit = 0
  while(prices.length > 0){
      let p = prices.pop()
      if(p! < max!) profit += max! - p!
      else max = p
  }
  return profit
}