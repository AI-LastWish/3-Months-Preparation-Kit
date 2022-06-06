// n = '9876'   k = 4   p = 9876987698769876 => 116 => 8

function getSumAllNumbers(s: string): number {    
  return s.split('').reduce((a, b) => a + Number(b), 0)
}

function superDigit(n: string, k: number): number {
  // Write your code here
  if(n.length === 1) return Number(n)
  const sD = (k * getSumAllNumbers(n.toString())).toString()
  return superDigit(sD, 1)
}
