const expect = require('chai').expect;

// Write a function to validate phone number in  XXX-XXX-XXXX or (XXX) XXX-XXXX formats?
// Input: string, ex: 123-456-7890 or (123) 456-7890
// Output: boolean, ex: true or false, if the input is valid or not,respectively

function validPhoneNumber(phoneNumber) {
    // create regex for the two formats
    let phoneUSFormatNoPar = /^\d{3}-\d{3}-\d{4}$/;
    let phoneUSFormatPar = /^\(\d{3}\) \d{3}-\d{4}$/;
    // test the input against the two formats
    if(phoneUSFormatNoPar.test(phoneNumber) || phoneUSFormatPar.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}

expect(validPhoneNumber('123-456-7890')).to.be.true;
expect(validPhoneNumber('(123) 456-7890')).to.be.true;
expect(validPhoneNumber('1234567890')).to.be.false;
