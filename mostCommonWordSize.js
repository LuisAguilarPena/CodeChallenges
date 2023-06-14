// Input: a string - "The dog jumped over the fence" - only contains letters and spaces
// Output: an integer that represents the most common word size in the provided sentence - 3
// if there are multiple words with the same size, return the first one

function mostCommonWordSize(str) {
    let sizeCounter = 0;
    let occurences = {};

    // count the number of characters in each word
    for (let i = 0; i < str.length; i++) {
        // if we hit a space or the end of the string
        if (str[i] === " " || i === str.length - 1) {
            //if we hit the end of the string, make sure to add the last word
            if (i === str.length - 1) {
                sizeCounter++;
            }
            // keep track of word size, key, and ocurrence, value 
            if (occurences[sizeCounter]) {
                occurences[sizeCounter]++;
            } else {
                occurences[sizeCounter] = 1;
            }
            // reset counter
            sizeCounter = 0;
        } else {
            // store the count
            sizeCounter++;
        }

    }

    console.log(occurences);

    // I can re use sizeCounter to now track most common word size
    sizeCounter = 0;
    
    // check occurences for the largest value, most common word size
    // for (const [key, value] in Object.entries(occurences)), Object entries returns an array of key value pairs, no necessary
    for (const wordSize in occurences) {
        //set sizeCounter to the first word size
        if(!occurences[sizeCounter]) {
            console.log("start", wordSize,":", occurences[wordSize], "sizeCounter:", sizeCounter);
            sizeCounter = wordSize;
        }
        // if the current word size is greater than the current sizeCounter, set sizeCounter to the current word size
        if(occurences[sizeCounter] < occurences[wordSize]) {
            console.log(wordSize,":", occurences[wordSize], "sizeCounter:", sizeCounter);
            sizeCounter = wordSize;
        }
    }

    return sizeCounter;
}

// console.log(mostCommonWordSize("The dog jumped over the fence")); // 3
// console.log(mostCommonWordSize("")); // 0
console.log(mostCommonWordSize("ex. an array of the given object's own enumerable string-keyed property key-value pairs")); // 3
