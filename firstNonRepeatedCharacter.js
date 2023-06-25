// Write a function that takes a string and returns the first non-repeated character
// Input: string - "aabcbd"
// Output: string - "c"

function firstNonRepeatedCharacter(str) {
    console.time("firstNonRepeatedCharacter")
    // create a variable to store the character
    let char = undefined;
    // iterate through the string, current character is str[i]
    for (let i = 0; i < str.length; i++) {
        // current character is going to our char variable
        char = str[i];
        // iterate through the string again, compare character is str[j]
        for (let j = 0; j < str.length; j++) {
            // if current character is equal to compare character, it repeats, don't check same index
            if (char === str[j] && i !== j) {
                // reassigned char to undefined
                char = undefined;
                // break out of the loop
                break;
            }
        }
        // if char is not undefined, it is the first non-repeated character
        if (char !== undefined) {
            // break out of the loop
            break;
        }
    }
    console.timeEnd("firstNonRepeatedCharacter")
    return char;
}

// console.log(firstNonRepeatedCharacter("")); // undefined
console.log(firstNonRepeatedCharacter("a")); // a
// console.log(firstNonRepeatedCharacter("ad")); // a
// console.log(firstNonRepeatedCharacter("ff")); // undefined
console.log(firstNonRepeatedCharacter("aabcbd")); // c
console.log(firstNonRepeatedCharacter("caabcbd")); // d

// Time Complexity: O(n^2), nested for loop
// Space Complexity: O(1), constant space

function firstNonRepeatedCharacter2(str) {
    console.time("firstNonRepeatedCharacter2")
    // first non-repeated character
    let fnc = undefined;

    // iterate through the string
    for (let char of str) {
        // split the string by the character, if the length is 2,
        // an array of 2 elements has returned, the thing before the fnc and the things after,
        // if we get an array of more than 2 elements, it means the character repeats
        if (str.split(char).length === 2) {
            fnc = char;
            break;
        }
    }
    console.timeEnd("firstNonRepeatedCharacter2")
    return fnc;
}

// console.log(firstNonRepeatedCharacter2("")); // undefined
// console.log(firstNonRepeatedCharacter2("a")); // a
console.log(firstNonRepeatedCharacter2("ad")); // a
// console.log(firstNonRepeatedCharacter2("ff")); // undefined
console.log(firstNonRepeatedCharacter2("aabcbd")); // c
console.log(firstNonRepeatedCharacter2("caabcbd")); // d

// The Split method returns an Array into which substrings of the result of converting this object to a String have been stored. The substrings are determined by searching from left to right for occurrences of separator; these occurrences are not part of any String in the returned array, but serve to divide up the String value. 

// Time Complexity: O(n^2), iterates again during split
// Space Complexity: O(1), constant space, but we are creating an array of substrings when we split
// From running timers, this is faster than the first solution