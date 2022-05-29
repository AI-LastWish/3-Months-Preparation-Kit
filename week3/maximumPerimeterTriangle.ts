// sticks = [1,2,3,4,5,10] => (2,3,4) & (3,4,5) => The longer perimeter is 12

function maximumPerimeterTriangle(sticks: number[]): number[] {
  // Write your code here
  sticks.sort((a, b) => a - b)
  let res = [-1]
  for(let i = 0; i < sticks.length - 2; i++){
      const curr = sticks.slice(i, i + 3)
      const isTriangle = curr[0] + curr[1] > curr[2]
      res = isTriangle ? curr : res
  }
  return res
}