function median(values) {

  values.sort( function(a,b) {return a - b;} );

  var half = Math.floor(values.length/2);

  return values.length % 2 === 0 ? values[half] : (values[half-1] + values[half]) / 2.0
}