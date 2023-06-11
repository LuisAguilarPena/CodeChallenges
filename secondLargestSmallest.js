const expect = require('chai').expect;

// Find the second largest and second smallest numbers in an unsorted array with duplicate values.

// Input: unsorted array with duplicate values
// Output: array with second largest and second smallest numbers

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 55, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 55];

function secondLargestSmallest(arrayNums) {
    // create container for second largest and second smallest
    let arr = [];
    // sort the array acsending
    arrayNums.sort((a,b) => a - b);
    // get rid of duplicates
    const noDupes = [...new Set(arrayNums)];
    // push the second largest and second smallest
    arr.push(noDupes[noDupes.length - 2], noDupes[1]);
    // return the container
    return arr;
};

expect(secondLargestSmallest(exampleArray)).to.eql([30, 2]);