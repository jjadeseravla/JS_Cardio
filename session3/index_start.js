// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...args) { //...rest is the operator and gives you all arguments
  var array =  args.sort(function (a, b) { return a - b; }); //return array (but dont need this as have
  // ...rest operator)
  return array.reduce(function(a,b){ //sum all numbers
    return a+b;
  }, 0);
}

//console.log(addAll(2, 5, 6, 7));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(arg) {
  var range =  [...Array(arg + 1).keys()];
  var total = 0;
  range.forEach(function(num){
    if(num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 5) {
      total += num;
    }
  });
  return total;
}
//   const range =  [...Array(arg + 1).keys()]; //gives you the range of numbers from 0 to arg
//   let total = 0;
//
//   function checkForPrime(num) {
//     for( let j = 2; j < num; j++) {
//       if(num % j !== 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//
//   range.forEach(function(num){
//     if(checkForPrime) {
//       total += num;
//     }
//   });
//   return total;
// }

//console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr) { //console.log(arr) its just [2, 3, 4, 5, 5, 'hello']
  const args = Array.from(arguments); //console.log(args) its [2, 3, 4, 5, 5, 'hello'], 2, 6

  function filterArr(arr) {
    //return true if not in array eg the 2 and 6
    return args.indexOf(arr) === -1 //its -1 its not true
  }
  return arr.filter(filterArr); //filter only returns the true though each iteration
}
//orrrrrr:

function seekAndDestroy(arr) {
  const array = arr.reduce(function(a, b){
    return a.concat(b);
  });

  const ans = array.filter(function(value, index) { //On each iteration, we’ll use Array.indexOf() to see
    //if our item already exists. If the returned index is smaller than the current index,
    // that means an instance of item already exists. Otherwise, we’ll return it to add it to the new array.
   return array.indexOf(value) >= index;
  });
  return ans;
}

//console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
  const arr1 = [];
  const arr2 = [];
array.forEach(function (val, i) {
  if(val === -1) {
    return arr1.push(i);
  } else {
    array.sort(function(a, b) {
      a-b;
    });
    return arr2.push(val);
  }
});

arr1.forEach(function(val, i) {
  arr2.splice(arr1[i],0, -1);
});
return arr2;

}

//console.log(sortByHeight([-1, 150, 160, 170, -1, -1, 180, 190]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(letters) {
  let code = letters.charCodeAt(0);
  let missing;
   letters.split('').map(function(char, i) {
     if(letters.charCodeAt(i) == code) {
       ++code;
     } else {
       missing = String.fromCharCode(code);
     }
   });
   return missing;
}

//console.log(missingLetters('abce'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(array) {
  even = 0;
  odd = 0;
  arr = [];
  array.forEach(function(num){
    num % 2 == 0 ? even += num : odd += num;
  })
  return arr.concat(even, odd);
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
