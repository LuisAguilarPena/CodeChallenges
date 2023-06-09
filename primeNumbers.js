const expect = require('chai').expect;

// Write a program to store prime numbers up to a given limit in an array.
// prime number - a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

function primeNumbers(limit) {
    // ignore 0 & 1
    if(limit === 0 || limit === 1) {
        return [];
    }

    // array containing prime numbers
    let primeNums = [];

    // iterate from 2 and up to the limit
    for(let i = 2; i <= limit; i++) {
        // check if the numbe is prime 
        if(isPrime(i)) {
            // if it is, print it
            primeNums.push(i);
        }
    }
    return primeNums;
}

function isPrime(n) {
    // 2 is the first prime number, if 2 return true
    if(n === 2) {
        return true;
    }
    // from 2 up to n/2, since any number greater than n/2 will not give us a whole number
    for (let i = 2; i < n/2; i++) {
        // we need to check if n is divisible by any number, if it is, return false
        if(n % i === 0) {
            return false;
        }
    }
    // if we get to the end of the loop, return true
    return true;
}

expect(primeNumbers(20)).to.include.members([2, 3, 5, 7, 11, 13, 17, 19]);
expect(primeNumbers(50)).to.include.members([
   2,  3,  4,  5,  7, 11,
   13, 17, 19, 23, 29, 31,
   37, 41, 43, 47
 ]);
expect(primeNumbers(2)).to.include.members([2]);
expect(primeNumbers(1)).to.include.members([]);
expect(primeNumbers(0)).to.include.members([]);