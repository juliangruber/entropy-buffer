var shannon = require('binary-shannon-entropy');

module.exports = function(length, target, passes){
  passes = passes || 50;

  var b = new Buffer(length);
  b.fill(0);
  if (target === 0) return b;

  for (var j = 0; j < passes; j++) {
    var H = shannon(b);
    if (H == target) return b;
    var idx = Math.round(Math.random() * length);
    if (H < target) {
      b[idx] = Math.round(Math.random() * 255);
    } else {
      b[idx] = 0;
    }
  }

  return b;
}
