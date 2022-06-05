function gridChallenge(grid) {
  // Write your code here
  grid = grid.map(g => g.split('').sort())
  const rows = grid.length
  const columns = grid[0].length
  for(let i = 0; i < rows - 1; i++){
      for(let j = 0; j < columns; j++){
          if(grid[i][j] > grid[i + 1][j]) return "NO"
      }
  }
  return "YES"
}