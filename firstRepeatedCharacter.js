const { expect } = require("chai");

// Write a function that takes a string and returns the first repeated character
// Input: string, ex: "hello"
// Output: string, ex: "l"

function firstRepeatedCharacter(string) {
    console.time("firstRepeatedCharacter");
    // iterate through string, i is going to be the index of the character that we are looking at
    for (let i = 0; i < string.length; i++) {
        // iterate through string again, j is going to be the index of the character that we are comparing to,
        // start at i + 1 to avoid comparing the same character
        for (let j = i +1 ; j < string.length; j++) {
            // if the character at i is equal to the character at j
            if(string[i] === string[j]) {
                // return the character at i
                console.timeEnd("firstRepeatedCharacter");
                return string[i];
            }
        }
    }
    console.timeEnd("firstRepeatedCharacter");
}

// Time Complexity: worst case O(n^2) because we are iterating through the string twice
// Time Complexity: better case O(N Log N) as soon as we find a character that occurs more than once, we return the character, and we never double check previous characters that have already been checked
// Time Complexity: best case O(n) if the first character is the repeated character
// Space Complexity: O(1) because we are not creating any new data structures


// Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string. The most popular use for hashing is the implementation of hash tables.

function firstRepeatedCharacter2(str) {
    console.time("firstRepeatedCharacter2");
    // create an empty hash set
    let hashSet = new Set();

    // Traverse the input str from left to right
    for(let i = 0; i <= str.length - 1; i++) {
        // If element is already in hash set, update x and then break
        if (hashSet.has(str[i])) {
            console.timeEnd("firstRepeatedCharacter2");
            return str[i];
        } else {
            // Else add element to hash set
            hashSet.add(str[i]);
        }
    }
    console.timeEnd("firstRepeatedCharacter2");
}

// Time Complexity: O(n) because we are iterating through the string once. The has method checks if a value is in the set, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the set.
// Space Complexity: O(n) because we are creating a new data structure, the hash set

// console.log(firstRepeatedCharacter("hello")); // "l", avg time: 0.037ms
// console.log(firstRepeatedCharacter("heloxx")); // "x", avg time: 0.04ms
// console.log(firstRepeatedCharacter("hi")); // undefined, avg time: 0.037ms
// console.log(firstRepeatedCharacter("abcdefghijklmnopqrstuvwxyz1234567890?¿¿")); // ¿, avg time: 0.07ms

// console.log(firstRepeatedCharacter2("hello")); // "l", avg time: 0.006ms
// console.log(firstRepeatedCharacter2("heloxx")); // "x", avg time: 0.005ms
// console.log(firstRepeatedCharacter2("hi")); // undefined, avg time: 0.002ms
// console.log(firstRepeatedCharacter2("abcdefghijklmnopqrstuvwxyz1234567890?¿¿")); // ¿, avg time: 0.016ms

expect(firstRepeatedCharacter2("hello")).to.equal("l");
expect(firstRepeatedCharacter2("heloxx")).to.equal("x");
expect(firstRepeatedCharacter2("hi")).to.equal(undefined);
expect(firstRepeatedCharacter2("abcdefghijklmnopqrstuvwxyz1234567890?¿¿")).to.equal("¿");