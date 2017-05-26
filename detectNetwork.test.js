
var should = chai.should();

function makeCardNumber(prefix, length) {
  var suffix = Array(length + 1 - prefix.length).join('1');
  return prefix.concat(suffix);
}

function genNumRange(low, high) {
  var range = []; 
  for(low; low <= high; low++) {
    range.push(low);
  }
  return range;
}

function genTestCases(prefixes, lengths, network) {
  prefixes.forEach((prefix) => {
    prefix = prefix.toString()
    lengths.forEach((length) => {
      var testCase = makeCardNumber(prefix, length);
      it('has a prefix of ' + prefix + ' and a length of ' + testCase.length, function() {
        detectNetwork(testCase).should.equal(network);
      });
    });
  });
}

describe('Diner\'s Club', function() {
  genTestCases([38, 39], [14], 'Diner\'s Club');
});

describe('American Express', function() {
  genTestCases([34, 37], [15], 'American Express');
});

describe('Visa', function() { 
  genTestCases([4], [13, 16, 19], 'Visa');
});

describe('MasterCard', function() {
  genTestCases(genNumRange(51, 55), [16], 'MasterCard');
});

describe('Discover', function() {
  genTestCases([6011, 644, 645, 646, 647, 648, 649, 65], [16, 19], 'Discover');
});

describe('Maestro', function() {
  genTestCases([5018, 5020, 5038, 6304], genNumRange(12, 19), 'Maestro')
});

describe('should support China UnionPay', function() {
  var prefixes = genNumRange(622126, 622925).concat([624, 625, 626]).concat(genNumRange(6282, 6288));
  genTestCases(prefixes, [16, 17, 18, 19], 'China UnionPay');
});

describe('should support Switch', function() {
  genTestCases([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759], [16, 18, 19], 'Switch');
});

