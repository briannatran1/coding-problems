/*In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);*/

function isAcceptablePassword(password){
    if(password.length > 6 && /\d/.test(password)){
        return true;
    }
    return false;
}
