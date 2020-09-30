
exports.min = function min (array) {
  if (!array || array.every(e => !e || e == '') || array.length == 0) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array || array.every(e => !e || e == '') || array.length == 0) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!array || array.every(e => !e || e == '') || array.length == 0) return 0;
  return array.reduce((a, c) => a + c) / array.length
}
