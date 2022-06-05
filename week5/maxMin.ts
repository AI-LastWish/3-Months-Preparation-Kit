// the minimum possible unfairness

function maxMin(k: number, arr: number[]): number {
  // Write your code here
  arr.sort((x, y) => x - y)
  let min = Infinity
  for(let i = 0; i <= arr.length - k; i++){
      const currMin = arr[i + k - 1] - arr[i]
      if(min > currMin) min = currMin
  }
  return min
}