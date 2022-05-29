// arr=[1,1,2,2,3] => 1
// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

function migratoryBirds(arr) {
  // Write your code here
  let maxBirdsId = -1, map = {}, max = 0
  for(let num of arr){
      map[num] = map[num] ? map[num] + 1 : 1
      if(map[num] > max) {
          max = map[num]
          maxBirdsId = num
      }
      if(map[num] === max && maxBirdsId > num){
          maxBirdsId = num
      }
  }
  return maxBirdsId
}