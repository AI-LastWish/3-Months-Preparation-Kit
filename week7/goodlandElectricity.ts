function pylons(k: number, arr: number[]): number {
  // Write your code here
  const diameter = (k - 1) * 2 + 1
  let plants = 0
  let i = k - 1
  while(true){
      while(arr[i] === 0){
          i--
          if(i < 0 || arr[i] === 2) return -1
      }
      plants++
      arr[i] = 2
      if(i + k > arr.length - 1) return plants
      i = Math.min(arr.length - 1, i + diameter)
  }
}