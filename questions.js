var selectElementsStartingWithA = function(array) {
}

var selectElementsStartingWithA = function(array) {
  return array.filter(function(item) {
   return (item[0] == 'a' || item[0] == 'A');
 });
}

var selectElementsStartingWithVowel = function(array) {
    return array.filter(startsWithVowel);
  }
  function startsWithVowel(array){
    var arrayVowels =['a','e','i','o','u'];
    return arrayVowels.some(function(vowel) { //some checks if any elements in an array pass a test
    return array.toLowerCase().slice(0,1) == vowel; //slice() method returns the selected elements in an array, as a new array object. 0 cos start from beginning and 1 duno
   }) ;
}

var removeNullElements = function(array) {
  return array.filter(notNull);
}
  function notNull(element){
      return element != null;
  }

var removeNullAndFalseElements = function(array) {
  return array.filter(notNullOrFalse);
}
  function notNullOrFalse(element){
      return element !== null && element !== false;
}

var reverseWordsInArray = function(array) {
  return
}

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
