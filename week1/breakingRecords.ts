// Returns

// int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
// Input Format

// Input Format
// The first line contains an integer n, the number of games.
// The second line contains n space-separated integers describing the respective values of scores[0], scores[1], ...

// 10 5 20 20 4 5 2 25 1 => 2 4

function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let minRecord = scores[0], maxRecord = scores[0], min = 0, max = 0
  for(let i = 0; i < scores.length; i++){
      if(scores[i] < minRecord){
          minRecord = scores[i]
          min++
      }
      if(scores[i] > maxRecord){
          maxRecord = scores[i]
          max++
      }
  }
  return [max, min]
}