/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"*/

//declare alphabet var
//find index of letter plus 1 and return

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let position = alphabet.indexOf(letter.toLowerCase()) + 1;
  return `Position of alphabet: ${position}`;
}
