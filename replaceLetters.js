/*In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
P.S. You work with lowercase letters only.*/

//return modified str 
  //split word into arr
  //iterate through char using map
    //if char is a vowel,
      //find index of char in alphabet arr
      //then, enter a while loop and search for nearest left consonant
    //else if, char is a consonant,
      //find index of char in alphabet arr
      //enter while loop,
        //search for nearest right vowel
    //else char is not a letter,
      //return vowel
  //join arr back into str

function replaceLetters(word) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];

  return word
    .split('')
    .map((char) => {
      if(vowels.includes(char)) {
        let index = alphabet.indexOf(char);
        while (true) {
          index = (index - 1 + alphabet.length) % alphabet.length;
          if (consonants.includes(alphabet[index])) {
            return alphabet[index];
          }
        }
      } else if (consonants.includes(char)) {
        let index = alphabet.indexOf(char);
        while (true) {
          index = (index + 1) % alphabet.length;
          if (vowels.includes(alphabet[index])) {
            return alphabet[index];
          }
        }
      } else {
        return char;
      }
    })
    .join('');
}
