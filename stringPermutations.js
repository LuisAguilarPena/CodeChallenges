// Write a function that will find all permutations of a given string
// Input: 'abc'
// Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

function stringPermutations(str) {
    // base cases, will stop the recursion
    // recursion will continue calling upon itself until we hit a base case, in this case, until we have only one letter
    if (str.length === 0) return "";
    if (str.length === 1) return str;
    // empty array to store permutations
    let permutations = [];
    // loop through string, chopping off one letter at a time
    for (let i = 0; i < str.length; i++) {
        // get the current letter
        let letter = str[i];
        // all other characters in the string except the letter we’re iterating with
        let remainingLetters = str.slice(0, i) + str.slice(i + 1);
        // recursively call stringPermutations on the remaining letters to get all permutations, this is where the magic happens
        const remainingLettersPermutated = stringPermutations(remainingLetters);
        // loop through the remaining letters
        for (let j = 0; j < remainingLettersPermutated.length; j++) {
            // push permutations into the array
            permutations.push(letter + remainingLettersPermutated[j]);
        }
    }
    return permutations;
}

console.log(stringPermutations('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']