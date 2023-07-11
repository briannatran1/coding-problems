/*Write a function, isOddString, which takes in a string. It should return true/false if the sum of each character’s position in the
alphabet is odd. For example, ‘a’ is position 1, ‘b’ is in position 2, and so on.

HINT You may find the string method .charCodeAt helpful!*/

//declare alphabet var
//declare sum var
//iterate through str using for...of loop
    //find index in alphabet and add 1
    //add this index to sum
//return true if sum is odd

function isOddString(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 0;
    for(let char of str){
        let index = alphabet.indexOf(char) + 1;
        sum += index;
    }
    return sum % 2 !== 0;
}
