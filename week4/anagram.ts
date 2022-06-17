function anagram(s: string): number {
  // Write your code here
  if(s.length % 2 !== 0) return -1
  let a = s.substring(0, s.length / 2), b = s.substring(s.length / 2)
  for(let c of b){
      if(a.includes(c)) a = a.replace(c, "")
  }
  return a.length
}
console.log(anagram('abccde'))