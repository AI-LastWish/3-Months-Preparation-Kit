// n = 7
// ar = [1,2,1,2,1,3,2]
// => 3

function sockMerchant(n, ar) {
  // Write your code here
  let map = {}, res = 0
  for(let num of ar){
      map[num] = map[num] ? map[num] + 1 : 1
      if(map[num] % 2 === 0) res++
  }
  return res
}