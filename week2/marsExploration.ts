// Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
// Given the signal received by Earth as a string, s, 
// determine how many letters of the SOS message have been changed by radiation.

function marsExploration(s: string): number {
  // Write your code here
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (((i % 3 === 0 || i % 3 === 2) && s[i] !== 'S') || (i % 3 === 1 && s[i] !== 'O')) result++
  }
  return result
}