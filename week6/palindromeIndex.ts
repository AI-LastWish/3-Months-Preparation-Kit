function palindromeIndex(s: string): number {
  // Write your code here
  let start = 0, end = s.length - 1
  while(start < end && s[start] === s[end]){
    start++
    end--
  }
  if(start >= end) return -1
  if(isPalindrome(s, start + 1, end)) return start
  if(isPalindrome(s, start, end - 1)) return end
  return -1
}
function isPalindrome(s: string, start: number, end: number){
  while(start < end && s[start] === s[end]){
    start++
    end--
  }
  return start >=  end
}