// s=[2,2,1,3,2]
// d=4
// m=2

function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let res = 0
  for(let i = 0; i < s.length; i++){
      if(s.slice(i, i + m).reduce((a, b) => a + b) === d) res++
  }
  return res
}