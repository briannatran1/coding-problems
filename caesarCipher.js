//accepts string and number
//declare newStr var
//
/**
Problem:
Create a function called caesarCipher that takes in a string and a number (the key) and returns the string encoded
using the Caesar cipher method. The Caesar cipher method involves replacing each letter in the original string with 
a letter that is a certain number of positions down the alphabet. For example, if the key is 2, then A would be
replaced with C, B would be replaced with D, and so on.
**/

// Create an variable for the alphabet 
// find out how to transform the word using the key --> in order to tranform the word with the key
// see how the letters are shifted? --> its shifted by the key
//  how do we use the alphabet to get the index of str[i]? -> indexOf method
// declare a new string variable
// 

// PSEUDOCODE

// declare a variable alphabet with the alphabet
// walk the string of str i = 0 -> its length
// str[0] -> c how do we turn this into an e? 
// what is the index of c? -->  alphabet.indexOf('c') => 2
// what do we with that 2? add 2 to the alphabet[i + 2] => e
// add it to the newStr ==> move on to the next letter

//if(letterCode > 25){

function caesarCipher(str, key){ // str = cat, key = 2
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = ''; // newStr = 'c'
  for(let i = 0; i < str.length; i++){
    let letterCode = alphabet.indexOf(str[i]); // 2
		if(letterCode >= 25){ // z
      letterCode = letterCode - 26; // 27 - 26 => 1
    }
    newStr += alphabet[letterCode + key]; // alphabet[2 + 2] = e => e
	
  }
  return newStr;
}

/*'cat', 2 => ecv
'zebra', 2 => bgdtc*/

//updated solution
function caesarCipher(str, num){ //'zebra', num = 4
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = '';
  for(let char of str){
    let oldIndex = alphabet.indexOf(char); //'z' => 25
    let newIndex = oldIndex + num; //25 + 4 = 29
    let newChar = alphabet[newIndex % 26]; //alphabet[3] = d
    newStr += newChar; //'d'
  }
  return newStr; //'difve'
}

//input: str, number
//output: str

//need to utilize indexes of alphabet var
//z => 25th index

//declare alphabet var => need access to letters & indexes
//declare newStr var 
//loop through string for each char
  //declare oldIndex var => finds original index of char in alphabet var
  //declare newIndex var => add num to oldIndex to shift position
  //declare newChar variable to get char at newIndex => take 26 letters into account
  //add char to newStr
//return newStr


caesarCipher("apple", 1); //'bqqmf'
caesarCipher('cat', 2); //'ecv'
caesarCipher('zebra', 4); //'difve'
