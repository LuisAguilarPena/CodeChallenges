const expect = require('chai').expect;

// Find all pairs of integers within a list which sum to a specified value (n).
// Input: Array of integers
// Output: Array of pairs of integers
// Examples:
    // pairsArrToSumValue([1, 2, 3, 4, 5], 5) => [[1, 4], [2, 3]]
    // pairsArrToSumValue([1, 2, 3, 4, 5], 10) => []
    // pairsArrToSumValue([0, 2, 3, 4, 5], 5) => [[0, 5]]
    // pairsArrToSumValue([6, 2, 1, 2, 3, 4, 5], 4) => [[2, 2], [1, 3]]
    
function pairsArrToSumValue(arr, sum) {
    // create empty array to store pairs
    const pairs = [];
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        // if current number, i, is greater than sum, continue
        if(arr[i] > sum) continue;
        // iterate through array again but start at i + 1, next number, j. We don't want to compare with the same number or compare a pair that have already been compared
        for (let j = i + 1; j < arr.length; j++) {
            // if current number + next number === sum, push pair to pairs array
            if(arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    // return pairs array
    return pairs;
};

expect(pairsArrToSumValue([1, 2, 3, 4, 5], 5)).to.deep.equal([[1, 4], [2, 3]]);
expect(pairsArrToSumValue([1, 2, 3, 4, 5], 10)).to.deep.equal([]);
expect(pairsArrToSumValue([0, 2, 3, 4, 5], 5)).to.deep.equal([[0, 5], [2, 3]]);
expect(pairsArrToSumValue([6, 2, 1, 2, 3, 4, 5], 4)).to.deep.equal([[2, 2], [1, 3]]);
expect(pairsArrToSumValue([6, 3, 1, 2, 3, 4, 5, 7, 15], 9)).to.deep.equal([[6, 3], [6, 3], [2, 7], [4, 5]]); // repeats?