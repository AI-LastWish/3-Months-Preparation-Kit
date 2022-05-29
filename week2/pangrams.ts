// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s: string): string {
  // Write your code here
  let chars = new Set()
  for(let c of s){
      if(c !== ' ') chars.add(c.toLowerCase())
  }
  return chars.size === 26 ? 'pangram' : 'not pangram'
}