function missingNumbers(arr: number[], brr: number[]): number[] {
  // Write your code here
  arr.forEach(value => brr.splice(brr.indexOf(value), 1))
  brr = [... new Set(brr)]
  return brr.sort((x, y) => x - y)
}