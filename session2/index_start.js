// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
//   const wordArr =  sen.split(' ')
//
//   let longestWord = 0;
//
//   for (let i = 0; i < wordArr.length; i++) {
//     if (wordArr[i].length > longestWord){
//       longestWord = wordArr[i].length;
//     }
//   }
// return longestWord;


const wordArr = sen.split(' ');

const sorted = wordArr.sort((a, b) => {
  return b.length - a.length;
});
return sorted[0];
//console.log(sen.split(' ').sort());



//   return str.toLowerCase()
//               .split(' ')
//               .map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   })
//   .join(' ');
// }
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

  const q = [];

  for (let i = 0; i < arr.length; i+= len) {
    const l = arr.slice(i, i+len);
    q.push(l);
    console.log(l);
  }
  return q;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

    //return arrays.concat.apply([], arrays);
    //or:
    return arrays.reduce(function (a, b) {
      return a.concat(b);
    })
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

  const regular = function(word) {
    return word.toLowerCase().slice('').sort().join('');
  }
  const one = regular(this.str1);
  const two = regular(this.str2);

  if (one === two) {
    return this.isAnagram = true;
  } else {
    return this.isAnagram = false;
  }
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
//const output = longestWord('Hello, my name is Braddddd');
//const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
//const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
const output = isAnagram('elbow', 'below');

console.log(output);
