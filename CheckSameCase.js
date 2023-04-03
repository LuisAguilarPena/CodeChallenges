const { strictEqual } = require('chai').assert;

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

// function sameCase(a, b){
//   // Char Code range for A-Z is 65-90
//   // Char Code range for a-z is 97-122

//   // if length of char string is more than 1 end
//   if(a.length !== 1 && b.length !== 1) {
//     return -1
//   }

//   const caseHelper = code => {
//     if (code > 64 && code < 91) {
//       return 'Up';
//     }

//     if (code > 96 && code < 123) {
//       return'Lo';
//     }
//   }

//   const caseA = caseHelper(a.charCodeAt(0));
//   const caseB = caseHelper(b.charCodeAt(0));

//   // non letters
//   if(!caseA || !caseB) {
//     return -1;
//   }

//   // Same case
//   if(caseA === caseB) {
//     return 1;
//   }

//   // Diff case
//   if (caseA !== caseB) {
//     return 0
//   }
// };

// // Leveraging to case methods, if not a letter regardless of method they should be the same
// function sameCase(a, b){
//   if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
//     return -1;
//     // check casing
//   } else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// Smallest solution with Regex
const sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;

strictEqual(sameCase('a', 'g'), 1, 'The given two characters are the same case');
strictEqual(sameCase('A', 'C'), 1, 'The given two characters are the same case');
strictEqual(sameCase('b', 'C'), 0, 'The given two characters are not the same case');
strictEqual(sameCase('B', 'w'), 0, 'The given two characters are not the same case');
strictEqual(sameCase('0', '?'), -1, 'At least one of the given two characters is not a letter');
strictEqual(sameCase('\t', 'Z'), -1, 'At least one of the given two characters is not a letter');
strictEqual(sameCase('H', ':'), -1, 'At least one of the given two characters is not a letter');
strictEqual(sameCase('^', 'H'), -1, 'At least one of the given two characters is not a letter');