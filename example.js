var create = require('./');
var entropy = require('binary-shannon-entropy');

for (var i = 0; i < 9; i++) {
  var buf = create(32, i);
  console.log(
    'Target: %s Actual: %s Buffer: %s',
    pad(i),
    pad(Math.round(entropy(buf) * 10) / 10),
    buf.toString('hex')
  );
}

function pad(n){
  var str = String(n);
  return str.length == 1
    ? str + '.0'
    : str;
}
