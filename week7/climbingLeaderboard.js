function climbingLeaderboard(ranked, player) {
  // Write your code here
  const newR = [...new Set(ranked)]
  let res = [], i = newR.length - 1
  player.forEach(p => {
      while(p >= newR[i]) i--
      // +1: convert from index based to position based 1
      // +2: to revert latest i--
      res.push(i + 2)
  })
  return res
}
