
# entropy-buffer

  Create a buffer with a target shannon entropy

## Example

```js
var create = require('entropy-buffer');
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
```

Output:

```bash
 ∴  entropy-buffer : node example.js
 Target: 0.0 Actual: 0.0 Buffer: 0000000000000000000000000000000000000000000000000000000000000000
 Target: 1.0 Actual: 1.1 Buffer: 0000009f00280005549f0000000000000000000000ed00000000000000000000
 Target: 2.0 Actual: 1.9 Buffer: 0000000000007900d000000000002300aa45004b8600000003a9000071000000
 Target: 3.0 Actual: 3.0 Buffer: 00005500020007b52500001600d5ce0dc200e54b000000b200a163003c000000
 Target: 4.0 Actual: 3.9 Buffer: e94c00000014003e23c6f375cdae0b7376c400962d4246000f00762200000037
 Target: 5.0 Actual: 4.3 Buffer: 00881cb7ab877b87d10087400094dbadca878ab998e1cf1f4f82d554f800f800
 Target: 6.0 Actual: 4.0 Buffer: 38a2c67a00d900ab3e992400c800b9e5b66900a168004a000d995a0049e1e100
 Target: 7.0 Actual: 4.2 Buffer: 600000c96eb2ba853352003150001e0064c14e81ca84a88c13810000de020045
 Target: 8.0 Actual: 4.3 Buffer: 6c00001300f400541619a8020f3f86b35500c706104daa3bc04c0096f0001500
```

## Installation

```bash
$ npm install entropy-buffer
```

## API

### create(length, target[, passes = 50])

## License

  MIT

