/*In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but it cannot consist of just digits;
having numbers or containing just numbers does not apply to the password longer than 9;
a string should not contain the word "password" in any case.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);*/

//check if password is greater than 6 chars
//check if password has the string password
//check if password is longer than 9 chars
//check if password has at least one digit and not all digits

function isAcceptablePassword(password){
    if (password.length <= 6) {
        return false;
    }
    if (password.toLowerCase().includes('password')) {
        return false;
    }
    if (password.length > 9) {
        return true;
    }
    if (/\d/.test(password) && !/^\d+$/.test(password)) {
        return true;
    }
    return false;
}
