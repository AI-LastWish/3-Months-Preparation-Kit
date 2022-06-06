function counterGame(n: number): string {
  // Write your code here
  if(n === 1) return "Louise"
  let turn = 0
  while(n > 1){
      const power = Math.floor(Math.log(n)/Math.log(2))
      const next = Math.pow(2, power)
      if(next === n) n /=2
      else n -= next
      turn++
  }
  return turn % 2 === 0 ? "Richard" : "Louise"
}