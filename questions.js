// var selectElementsStartingWithA = function(array) {
// }
//
// var selectElementsStartingWithA = function(array) {
//   return array.filter(function(item) {
//    return (item[0] == 'a' || item[0] == 'A');
//  });
// }
var selectElementsStartingWithA = function(array) {
  aWords = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].slice(0,1).toLowerCase() == 'a') {
      aWords.push(array[i]);
    }
  }
  return aWords;
}


// var selectElementsStartingWithVowel = function(array) {
//     return array.filter(startsWithVowel);
//   }
//   function startsWithVowel(array){
//     var arrayVowels =['a','e','i','o','u'];
//     return arrayVowels.some(function(vowel) { //some checks if any elements in an array pass a test
//     return array.toLowerCase().slice(0,1) == vowel; //slice() method returns the selected elements in an array, as a new array object. 0 cos start from beginning and 1 duno
//    }) ;
// }
var selectElementsStartingWithVowel = function(array) {
  vowelWords = [];
    for (let i = 0; i < array.length; i++) {
      var word = array[i].slice(0,1).toLowerCase();
      if(word == 'o' || word == 'e' || word == 'u' || word == 'i'|| word == 'a' ) {
        console.log(array[i].slice(0,1))
        vowelWords.push(array[i]);
      }
    }
    return vowelWords;
  }


// var removeNullElements = function(array) {
//   return array.filter(notNull);
// }
//   function notNull(element){
//       return element != null;
//   }
var removeNullElements = function(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] == null) {
      array.splice(i,1);
      i--;
    }
  }
  return array;
}


// var removeNullAndFalseElements = function(array) {
//   return array.filter(notNullOrFalse);
// }
//   function notNullOrFalse(element){
//       return element !== null && element !== false;
// }
var removeNullAndFalseElements = function(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] == null || array[i] === false) {
      array.splice(i,1);
      i--;
    }
  }
  return array;
}


// var reverseWordsInArray = function(array) {
//   return array.map(reverseEachWord);
//  }
//   function reverseEachWord(element){
//     return element.split("").reverse().join("")
//   }
var reverseWordsInArray = function(array) {
  rev =[ ];
  for (let i = 0; i < array.length; i++) {
  rev.push(array[i].split('').reverse().join(''));

  }
  return rev;
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


// var allElementsExceptFirstThree = function(array) {
//   return array.slice(3);
// }
var allElementsExceptFirstThree = function(array) {
  var rev = array.reverse();
  var times = 3;
    for(var i=0; i < times; i++){
      rev.pop();
    }
    return rev.reverse();
}


// var addElementToBeginning = function(array, element) {
//    array.unshift(element);
//    return array
// }
var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}


// var sortByLastLetter = function(array) {
//   array.forEach(function(element) {
//     return element.split("").reverse().join("");
//   })
// }
var sortByLastLetter = function(array) {
  for (let i = 0; i < array.length; i++) {
    var rev = array[i].split('').reverse().join('');
    // var r = function(array) {
    //   sortArr = [];
    //   for (let i = 0; i < array.length; i++) {
    //     sortArr.push(array[i].split('').reverse().join(''));

    //   }
    //   sortArr.sort(function(a,b) {
    //     if(a > b)
    //       return 1;
    //     if(b > a)
    //       return -1;
    //     return 0;
    //   });
    //    sortArr.forEach(function(element) {
    //      return element.split('').reverse().join('');
    //    });
    //    return sortArr
    // }
  }
}


// var getFirstHalf = function(string) {
//   var number = string.replace(/[^a-zA-Z]/g, '').length
//   if (number % 2 === 0) {
//     return string.slice(0, number/2);
//   } else {
//     return string.slice(0, (number/2 +1));
//   }
// }
var getFirstHalf = function(string) {
  var num = string.length;
 if(num % 2 == 0){
   return string.slice(0, (num / 2));
 } else {
   return string.slice(0, ((num/2)+0.5));
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


// var shortestWord = function(array) {
//   var shortest = array[0];
//
//   for(var i=0; i < array.length; i++) {
//     if (shortest.length > array[i].length) {
//       shortest = array[i];
//     }
//   }
//   return shortest
// }
var shortestWord = function(array) {
  let shortest = array[0];
     for(var i = 0; i < array.length; i++) {
      if(shortest.length > array[i].length){
      shortest = array[i];
     }
    };
  return shortest;
}

// var longestWord = function(array) {
//   var longest = array[0];
//
//   for(var i=0; i < array.length; i++) {
//     if (longest.length < array[i].length) {
//       longest = array[i];
//     }
//   }
//   return longest
// }
var longestWord = function(array) {
  let longest = array[0];
  for(var i = 0; i < array.length; i++) {
   if(longest.length < array[i].length){
   longest = array[i];
  }
 };
 return longest;
}


// var sumNumbers = function(array) {
//   return array.reduce(function(sum, value) {
//     return sum + value;
//   });
// }
var sumNumbers = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
}


var repeatElements = function(array) {
  return array.concat(array);
}


// var stringToNumber = function(string) {
//   return Number(string);
// }
var stringToNumber = function(string) {
  return parseInt(string);
}


// var calculateAverage = function(array) {
//   var total = 0;
//   for(var i = 0; i < array.length; i++) {
//       total += array[i];
//   }
//   return total / array.length;
// }
var calculateAverage = function(array) {
  return array.reduce(function(a, b){
    return a + b;
  }, 0)/array.length;
}


// var getElementsUntilGreaterThanFive = function(array) {
//    var results = [];
//    for (var i = 0; i < array.length; i++) {
//      if (array[i] <= 5) {
//        results.push(array[i]);
//      } else if (array[i] > 5) {
//        break; // exits the loop so it stops running
//      }
//    }
//    return results
// }
var getElementsUntilGreaterThanFive = function(array) {
  small = [];
    for(var i =0; i < array.length; i++) {
      if(array[i] ==  6){
        break;
      } else {
        small.push(array[i])
      }
    }
  return small;
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


// var sumKeysAndValues = function(object) {
//  var tuple = Object.entries(object);
//  return  tuple.reduce(function(a, b) {
//    return a.concat(b);
//  })
// }
var sumKeysAndValues = function(obj) {
  var keysArr =  Object.keys(obj).map(function(a){
    return parseInt(a);
  });
  var valsArr = Object.values(obj);
  var array =  keysArr.concat(valsArr);
    return array.reduce(function(a, b){
      return a + b;
    },0);
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


// var getDomainName = function(string) {
//   var noFront = string.slice(6);
//   var noBack = noFront.slice(0,-4);
//   return noBack;
// }
var getDomainName = function(string) {
   return string.substring(0, email.indexOf("@"));
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
