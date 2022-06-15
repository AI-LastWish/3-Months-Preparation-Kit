function superReducedString(s) {
  // Write your code here
  s = s.split('')
  let i = 0
  while(i < s.length){
      if(i >= 0 && s[i] === s[i + 1]) s.splice(i--, 2)
      else i++
  }
  return s.length > 0 ? s.join('') : 'Empty String'
}