// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  var string = str.split('').reverse().join('');

  return string;
  // CONTRIBUTED SOLUTION
  // let arr = [...str];
  // let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  // return newArr.join("");
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // return str.split("").reduce((reversedString, character) => character + reversedString, "");
  // CONTRIBUTED SOLUTION
  // BY James Robinson
  // if (str.length === 1) {
  //   return str[0];
  // } else {
  //   return reverseString(str.slice(1)) + str[0];
  // }
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  var revString = str.split('').reverse().join('');

  if (revString === str) {
    return true;
  } else {
    return false;
  }

  // CONTRIBUTED SOLUTION
  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

  var str = int.toString();

  var rev = str.split('').reverse().join('');

  return parseInt(rev);
  //var num = rev.parseInt()
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  //var strArr = str.toLowerCase().split(' ');

  // for (var i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  // }
  //
  // return strArr.join(' ');

  return str.toLowerCase()
              .split(' ')
              .map(word => {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join(' ');
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  var charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('')
            .forEach(letter => {
              if (charMap[letter]) {
                charMap[letter]++;
              } else {
                charMap[letter] = 1 ;
              }
            });
    for (let letter in charMap) {
      if(charMap[letter] > maxNum) {
        maxNum = charMap[letter];
        maxChar = letter;
      }
    }
    return maxChar;




  // CONTRIBUTED SOLUTION
  // Here is my version of the algorithm.
  // I put the string into an array and I sort it.
  // Then I loop through the array keeping track of the count for each character.
  // I keep track of the "current character" and the "max character" with objects.
  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};
  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //   } else {
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   }
  // });
  // return maxChar.char;
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // let letters = {};
  // str
  //   .toLowerCase()
  //   .split('')
  //   .forEach(l => (letters[l] = letters[l] + 1 || 1));
  // const sortedLetters = Object.entries(letters)
  //   .sort((a, b) => a[1] - b[1])
  //   .map(a => a[0]);
  // return sortedLetters[sortedLetters.length - 1];
  // BY Bedirhan Dincer
  // const charMap = {};
  // str
  //   .split('')
  //   .forEach(char => (charMap[char] = charMap[char] ? charMap[char] + 1 : 1));
  // return Math.max(...Object.keys(charMap).map(char => charMap[char]));
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for( let i = 1; i <= 100; i ++) {
    if(i % 15 === 0) {
      console.log('FizzBuzz');
    } else if ( i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

  // CONTRIBUTED SOLUTION
  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }
  // CONTRIBUTED SOLUTION
  // for(var i = 1; i <= 100; i++) {
  //   let output = '';
  //   if(i % 3 === 0) {
  //     output += 'fizz';
  //   }
  //   if(i % 5 === 0) {
  //     output += 'buzz';
  //   }
  //   console.log(output || i);
  // }
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) {
  //     output += 'Fizz';
  //   }
  //   if (i % 5 === 0) {
  //     output += 'Buzz';
  //   }
  //   if (output === '') {
  //     output = i;
  //   }
  //   console.log(output);
  // }
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // for (let i = 1; i <= 100; i++) {
  //   console.log([
  //     (i % 3 === 0 ? 'Fizz' : ''),
  //     (i % 5 === 0 ? 'Buzz' : ''),
  //   ].join('') || i);
  // }

  // CONTRIBUTED SOLUTION
  // By Ashish S
  // for (let i = 1; i < 101; i++) {
  //   let a = i % 3 ? (i % 5 ? i : 'Buzz') : i % 5 ? 'Fizz' : 'FizzBuzz';
  //   console.log(a);
  // }
}

// Call Function
//const output = reverseString('hello');
//const output = isPalindrome('hello');
//const output = reverseInt(123);
//const output = capitalizeLetters('i love javascript');
//const output = maxCharacter('lollipop');
const output = fizzBuzz(100);

console.log(output);
