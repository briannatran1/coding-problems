/*In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but it cannot consist of just digits;
if the password is longer than 9 - previous rule (about one digit), is not required.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);*/

function isAcceptablePassword(password){
    if(password.length > 9){
        return true;
    }
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
