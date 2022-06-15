function icecreamParlor(m, arr) {
  // Write your code here
  let map = {}
  for(let i = 0; i < arr.length; i++){
      const n = arr[i]
      if(map[n]) return [map[n], i + 1]
      if(m - n > 0) map[m - n] = i + 1
  }
  return [-1, -1]
}