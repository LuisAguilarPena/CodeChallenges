const { strictEqual } = require('chai').assert;

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b){
  return 0;
}

strictEqual(sameCase('a', 'g'), 1, 'The given two characters are the same case');
strictEqual(sameCase('A', 'C'), 1, 'The given two characters are the same case');
strictEqual(sameCase('b', 'C'), 0, 'The given two characters are not the same case');
strictEqual(sameCase('B', 'w'), 0, 'The given two characters are not the same case');
strictEqual(sameCase('0', '?'), -1, 'At least one of the given two characters is not a letter');
strictEqual(sameCase('\t', 'Z'), -1, 'At least one of the given two characters is not a letter');
strictEqual(sameCase('H', ':'), -1, 'At least one of the given two characters is not a letter');