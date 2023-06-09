// Write a program to print prime numbers up to a given limit
// prime number - a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

function primeNumbers(limit) {
    // ignore 0 & 1
    if(limit === 0 || limit === 1) {
        return;
    }
    // iterate from 2 and up to the limit
    for(let i = 2; i <= limit; i++) {
        // check if the numbe is prime 
        if(isPrime(i)) {
            // if it is, print it
            console.log(i);
        }
    }
}

function isPrime(n) {
    // 2 is the first prime number, if 2 return true
    if(n === 2) {
        return true;
    }
    // from 2 up to n,
    for (let i = 2; i < n; i++) {
        // we need to check if n is divisible by any number, if it is, return false
        if(n % i === 0) {
            return false;
        }
    }
    // if we get to the end of the loop, return true
    return true;
}

primeNumbers(20);
