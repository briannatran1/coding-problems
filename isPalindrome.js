/*Write a method is_palindrome(word) that takes in a string word and returns the true 
if the word is a palindrome, false otherwise. A palindrome is a word that is spelled 
the same forwards and backwards.*/

function isPalindrome(word){
    let reversed = word.split('').reverse().join('');
    if(word === reversed){
        return true;
    }
    return false;
}

//input: str
//output: boolean

//declared reversed word var => reverse letters in word
    //to reverse: split str, reverse method, then join
//if word is the same as reversed word,
    //return true
//return false

isPalindrome('racecar'); //true
isPalindrome('kayak'); //true
isPalindrome('bootcamp'); //false
