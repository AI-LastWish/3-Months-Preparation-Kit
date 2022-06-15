function minimumBribes(q: number[]): void {
  // Write your code here
  let total = 0
  for(let i = 0; i < q.length; i++){
      const original_pos = q[i] - 1
      const diff = original_pos - i
      if(diff > 2) return console.log("Too chaotic")
      if(diff <= 0){
          // we need to bribe from forward person to the person in front of current position
          for(let j = Math.max(0, original_pos - 1); j < i; j++){
              if(q[j] - 1 > original_pos) total++
          }
      }
  }
  return console.log(total)
}