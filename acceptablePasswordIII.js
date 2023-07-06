/*In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but cannot consist of just digits.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);*/

//check if password has at least 6 chars
//set up test for 1 digit 
//set up test for 1 non number
//iterate through password using for...of loop 
    //if char is number,
        //set hasDigit to true
    //else
        //set nonDigit to true
//return true if all 3 are true

function isAcceptablePassword(password){
    let minLength = password.length > 6;
    let hasDigit = false;
    let nonDigit = false;
    for(let char of password){
        if(!isNaN(parseInt(char))){
            hasDigit = true;
        }
        else if(char >= 'a' && char <= 'z'){
            nonDigit = true;
        }
        else if(char >= 'A' && char <= 'Z'){
            nonDigit = true;
        }
        if(hasDigit && nonDigit){
            break;
        }
    }
    return minLength && hasDigit && nonDigit;
}
