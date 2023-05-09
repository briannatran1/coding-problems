/*In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore*/

//if str is empty,
  //return false
//iterate through str using for...of loop
  //if char is not an uppercase letter or lowercase letter or number,
    //return false
//return true

function alphanumeric(str){
  if(str.length === 0){
    return false;
  }
  for(let char of str){
    if(!(
      (char >= 'A' && char <= 'Z') ||
      (char >= 'a' && char <= 'z') ||
      (char >= '0' && char <= '9')
    )){
      return false;
    }
  }
  return true;
}
