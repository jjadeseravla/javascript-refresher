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
  return array.map(reverseEachWord);
 }
  function reverseEachWord(element){
    return element.split("").reverse().join("")
  }


var everyPossiblePair = function(array) {
  var result = []
  for (var i = 0; i < array.length -1; i++) {
    for (var j = i; j < array.length -1; j++) {
      result.push([array[i], array[j+1]].sort());
    }
  }
  return result.sort()
}


var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}


var addElementToBeginning = function(array, element) {
   array.unshift(element);
   return array
}


var sortByLastLetter = function(array) {
  array.forEach(function(element) {
    return element.split("").reverse().join("");
  })
}
//    return array.filter(lastLetterSort).sort()
//  }
// function lastLetterSort(string) {
//   var a = string.split("").reverse().join("");
// }


var getFirstHalf = function(string) {
  var number = string.replace(/[^a-zA-Z]/g, '').length
  if (number % 2 === 0) {
    return string.slice(0, number/2);
  } else {
    return string.slice(0, (number/2 +1));
  }
}


var makeNegative = function(number) {
  if (number >= 0) {
    return number * -1
  } else {
    return number
  }
}


var numberOfPalindromes = function(array) {
  return array.filter(isPalindrome).length;
}
function isPalindrome(string) {
  return string == string.split("").reverse().join(""); // or just return string == reverseString(string)
}


var shortestWord = function(array) {
  var shortest = array[0];

  for(var i=0; i < array.length; i++) {
    if (shortest.length > array[i].length) {
      shortest = array[i];
    }
  }
  return shortest
}

var longestWord = function(array) {
  var longest = array[0];

  for(var i=0; i < array.length; i++) {
    if (longest.length < array[i].length) {
      longest = array[i];
    }
  }
  return longest
}
//   var lgth = 0;
//   var longest;
//   for(var i=0; i < array.length; i++) {
//     if (array[i].length > lgth) {
//       var lgth = array[i].length;
//       longest = array[i];
//     }
//   }
// }


var sumNumbers = function(array) {
  return array.reduce(function(sum, value) {
    return sum + value;
  });
}


var repeatElements = function(array) {
  return array.concat(array);
}


var stringToNumber = function(string) {
  return Number(string);
}


var calculateAverage = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total / array.length;
}


var getElementsUntilGreaterThanFive = function(array) {
   var results = [];
   for (var i = 0; i < array.length; i++) {
     if (array[i] <= 5) {
       results.push(array[i]);
     } else if (array[i] > 5) {
       break; // exits the loop so it stops running
     }
   }
   return results
}


var convertArrayToObject = function(array) {
return array.reduce(function(p, c) {
         p[c[0]] = c[1];
         return p;
    }, {});
}


var getAllLetters = function(array) {
  var letters = [];
  for ( var i=0; i < array.length; i++) {
    array[i].split(" ");
    letters.push(array[i]);
  }
  return letters;
}


var swapKeysAndValues = function(object) {
  var hash = {};
  for(var key in object) {
    hash[object[key]] = key;
  }
  return hash;
}


var sumKeysAndValues = function(object) {
 var tuple = Object.entries(object);
 return  tuple.reduce(function(a, b) {
   return a.concat(b);
 })

 // function answer(arr)
 // var numbers = arr.
 //  return arr.reduce((sum, value) {
 //    return sum + value;
 //  }, 1);
}




var removeCapitals = function(string) {
  return string.replace(/[A-Z]/g,'');
}


var roundUp = function(number) {
  return Math.ceil(number);
}


var formatDateNicely = function(date) {
  return date.toLocaleDateString();
}


var getDomainName = function(string) {
  var noFront = string.slice(6);
  var noBack = noFront.slice(0,-4);
  return noBack;
}


var titleize = function(string) {
  var titleString =string.split(" ");
    for (var i =0; i < titleString.length; i++) {
      if (titleString[i] !== 'the' || 'and') {
      titleString[i] = titleString[i].charAt(0).toUpperCase() + titleString[i].slice(1);
    }
  }
      return titleString.join(" ");
}


var checkForSpecialCharacters = function(string) {
  return string.match(/\W/g) != null;
}


var squareRoot = function(number) {
  return Math.sqrt(number);
}


var factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
 // This is it! Recursion!!
  return number * factorial(number - 1);
  }
  //  or you could do: var result = 1;
//  for(var i=2; i<=number; i ++){
//    result *= i;
//  }
//  return result;


var findAnagrams = function(string) {
  return 'Write your method here';
}


var convertToCelsius = function(number) {
  var num = ((number - 32) * 5/9);
  return Math.ceil(num);
}


var letterPosition = function(array) {
  return 'Write your method here';
}
