function bigSorting(unsorted) {
  // Write your code here
return unsorted.sort((x, y) => {
  if(x.length !== y.length) return x.length - y.length
  else {
    for(let i = 0; i < x.length; i++){
      if(x[i] < y[i]) return -1
      else if(x[i] > y[i]) return 1
    }
  }
})
}