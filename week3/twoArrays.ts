// A=[0, 1]
// B=[0, 2]
// k=1
// => YES

function twoArrays(k: number, A: number[], B: number[]): string {
  // Write your code here
  A.sort((i, j) => i - j)
  B.sort((i, j) => j - i)
  for(let i = 0; i < A.length; i++){
      if(A[i] + B[i] < k) return "NO"
  }
  return "YES"
}