// Given an array of integers, where all elements but one occur twice, find the unique element.
// [1, 2, 3, 4, 3, 2, 1] => 4

function lonelyinteger(a: number[]): number {
  // Write your code here
  let s = new Set()
  a.forEach(number => {
      s.has(number) ? s.delete(number) : s.add(number)
  })
  return s.values().next().value
}