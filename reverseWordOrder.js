// Reverse the word order in a sentence: I am a student => student a am I

function reverseWordOrder(str) {
    // split the string into an array of words
    // reverse the array
    // join the array into a string
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWordOrder('I am a student')); // student a am I