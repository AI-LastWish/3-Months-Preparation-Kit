function chiefHopper(arr: number[]): number {
  // Write your code here
  arr.reverse()
  let min_energy = 0
  
  for(let height of arr){
      min_energy = Math.ceil((min_energy + height) / 2)
  }
  return min_energy
}