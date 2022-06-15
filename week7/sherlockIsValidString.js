function isValid(s) {
  let map = {}
  for(let c of s){
      map[c] = map[c] ? map[c] + 1 : 1
  }
  console.log(map)
  const values = Object.values(map).sort((x, y) => x - y)
  const min = values[0], max = values[values.length - 1]
  const secondMin = values[1], secondMax = values[values.length - 2]
  if(max === min) return "YES"
  if(max === min + 1 && min === secondMax) return "YES"
  if(min === 1 && max === secondMin) return "YES"
  return "NO"
}