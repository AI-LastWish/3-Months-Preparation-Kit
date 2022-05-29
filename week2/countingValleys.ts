// UDDDUDUU       => 1
// _/\      _
//    \    /
//     \/\/

function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valleys = 0, seaLevels = 0
  for(let step of path){
      if(step === 'U') seaLevels++
      else{
          if(seaLevels === 0) valleys++
          seaLevels--
      }
  }
  return valleys
}