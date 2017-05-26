// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
function insertRange(start, end) {
  var range = [];
  for(start; start <= end; start++) {
    range.push(start);
  }
  return range;
}


var cardTypes = [

{
  network: "Diner's Club",
  prefixes: [38, 39],
  lengths: [14]
},

{
  network: "American Express",
  prefixes: [34, 37],
  lengths: [15]
},

{
  network: "Visa",
  prefixes: [4],
  lengths: [13, 16, 19]
}, 

{
  network: "MasterCard",
  prefixes: [51, 52, 53, 54, 55],
  lengths: [16]
},

{
  network: "Discover",
  prefixes: [6011, 644, 645, 646, 647, 648, 649, 65],
  lengths: [16, 19]
},

{
  network: "Maestro",
  prefixes: [5018, 5020, 5038, 6304],
  lengths: [12, 13, 14, 15, 16, 17, 18, 19]
},

{
  network: "China UnionPay",
  prefixes: insertRange(622126, 622925).concat([624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288]),
  lengths: [16, 17, 18, 19]
},

{
  network: "Switch",
  prefixes:[4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
  lengths: [16, 18, 19]
}

];

var detectNetwork = function(cardNumber) {
  return cardTypes.reduce((validCard, card) => {
    var prefixMatches = card.prefixes.some((prefix) => {
      prefix = prefix.toString();
      return prefix === cardNumber.slice(0, prefix.length);
    });

    var lengthMatches = card.lengths.some((numOfDigits) => numOfDigits === cardNumber.length);

    return prefixMatches && lengthMatches ? card.network : validCard;
  }, "Invalid Card");
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


