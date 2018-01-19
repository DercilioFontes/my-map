// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

var map = function(array, callbackFunction){
  var arrayResult = [];

  for (var item of array) {
    arrayResult.push(callbackFunction(item));
  }

  return arrayResult;
};


var words = ["ground", "control", "to", "major", "tom"];

var map1 = map(words, function(word) {
  return word.length;
});

console.log(map1);


var map2 = map(words, function(word) {
  return word.toUpperCase();
});

console.log(map2);

var map3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(map3);

// Results need to be:

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]