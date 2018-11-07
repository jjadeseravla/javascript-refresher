var simpleMode = function(array) {
   var modes = [],
   count = [], i, array, maxIndex = 0;

    for (i = 0; i < array.length; i += 1) {
        arr = array[i];
        count[arr] = (count[arr] || 0) + 1;
        if (count[arr] > maxIndex) {
            maxIndex = count[arr];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

console.log(simpleMode([10, 4, 5, 2, 4]));

var letterCount = function(string) {

}

console.log(letterCount('Today, is the greatest day ever!'));

var isPrime = function(number) {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
         if (number % i == 0) {
             prime = false;
             break;
         }
     }
     return prime && (number > 1);
 }

console.log(isPrime(9));



var dashIfOdd = function(string) {

}

console.log('454793');

var yoda = function(string) {
  let chars =  string.split(' ');
  return firstTwo = chars.slice(2) + " " + chars[0]+ " " + chars[1]
}

console.log(yoda('you must use the force'))

var powerTwo = function(int) {
   return Math.log2(int) % 1 === 0;
}

console.log(powerTwo(511));


var exesAndOs = function(string) {
let e =  string.replace(/[^e]/g, "").length;
let o =  string.replace(/[^o]/g, "").length;
  return (e == o ? true : false);
}

console.log(exesAndOs('I really need to do something with myself'));

var secondLowestandHighest = function(array) {

}

console.log(7, 7, 12, 98, 106);

var explode = function(x){
  var score = 0;
  var result = [];
  if((typeof x[0] !== 'number') && (typeof x[1] !=='number')){
      return 'Void!'
   }else if((typeof x[0] !== 'number') && (typeof x[1] ==='number')){
      score = x[1];
    }else if ((typeof x[0] === 'number') && (typeof x[1] !=='number')){
      score = x[0];
    }else{
       score = x[0]+x[1];
    }
    for(let i=0; i<score; i++){
      result.push(x);
    }
   return result;
}

console.log(explode([9,3]));
