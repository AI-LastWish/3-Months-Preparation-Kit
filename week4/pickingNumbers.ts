// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a: number[]): number {
  const map = new Map();
  for(const i of a) {
      map.set(i, (map.get(i) ?? 0) + 1);
  }
  let result = 2;
  for(const key of map.keys()) {
      result = Math.max(
          result, 
          (map.get(key - 1) ?? 0) + map.get(key),
          (map.get(key + 1) ?? 0) + map.get(key),
      )
  }
  return result;
}