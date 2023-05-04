/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

/*Go through str and if we encounter a letter, replace it with the 13th letter after it. Return other non-letters as they are.*/

//declare alphabet var
//declare caps var
//declare newStr var
//iterate through str using for...of loop
  //if char is a lower case letter,
    //find index of letter in alphabet
    //find new index of new letter in alphabet by adding 13
    //find new char of new index
    //add new char to newStr
  //else if char is a cap letter,
    //find index of letter in caps
    //find new index of new letter in caps by adding 13
    //find new char of new index
    //add new char to newStr
  //else,
    //add to newStr
//return newStr

function rot13(str){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newStr = '';
  for(let char of str){
    if(char >= 'a' && char <= 'z'){
      let oldIndex = alphabet.indexOf(char);
      let newIndex = (oldIndex + 13) % 26;
      let newChar = alphabet[newIndex];
      newStr += newChar;
    }
    else if(char >= 'A' && char <= 'Z'){
      let oldIndex = caps.indexOf(char);
      let newIndex = (oldIndex + 13) % 26;
      let newChar = caps[newIndex];
      newStr += newChar;
    }
    else{
      newStr += char;
    }
  }
  return newStr;
}
