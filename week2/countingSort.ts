function countingSort(arr: number[]): number[] {
  // Write your code here
  const result = Array(100).fill(0)
  arr.forEach(number => result[number]++)
  return result
}