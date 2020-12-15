// Challenge 1
// for a given string, find the length of the longest word and return the word

function longestWord (str) {
  // declare function
  var wordArray = str.split(' ')
  // break up string into array of individual words
  var maxWord = 0;
  // initialize largest word conditional variable
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxWord) {
      var maxWord = wordArray[i].length
      var wordIndx = i;
      // save index of longest word to return later
    }
  }
  return wordArray[wordIndx];
}

var string = "I love my dog, he is a such a good boy"
console.log(longestWord(string))

// Challenge 2
// determine if 2 strings are permutations of one another

function isPermutation (str1, str2) {
  return str1.split('').sort().join('') == str2.split('').sort().join('')
}

console.log(isPermutation('dog','god'))
