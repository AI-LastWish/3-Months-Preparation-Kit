// Drawing book

function pageCount(n: number, p: number): number {
  // Write your code here
  const frontFlip = Math.floor(n / 2)
  const lastFlip = Math.floor(p / 2)
  return Math.min(lastFlip, frontFlip - lastFlip)
}