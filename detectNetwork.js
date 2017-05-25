// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var cardTypes = [

{
  network: "Diner's Club",
  prefixes: [38, 39],
  numOfDigits: [14]
},

{
  network: "American Express",
  prefixes: [34, 37],
  numOfDigits: [15]
}

];

var detectNetwork = function(cardNumber) {
  return cardTypes.reduce((validCard, card) => {
    var prefixMatches = card.prefixes.some((prefix) => {
      prefix = prefix.toString();
      return prefix === cardNumber.slice(0, prefix.length);
    });

    var lengthMatches = card.numOfDigits.some((numOfDigits) => numOfDigits === cardNumber.length);

    return prefixMatches && lengthMatches ? card.network : validCard;
  }, "Invalid Card");
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


