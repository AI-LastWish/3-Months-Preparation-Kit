// check if beatiful string

function separateNumbers(s: string): void {
  // Write your code here
  for(let i = 1; i <= Math.floor(s.length / 2); i++){
      const start = s.slice(0, i)
      let num = BigInt(start), build = ''
      while(build.length < s.length) build += num++
      if(build === s) return console.log('YES', start)
  }
  return console.log('NO')
}