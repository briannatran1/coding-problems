/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57*/

/*Go through str. If we encounter a consonant, add value to sum. Otherwise, reset sum value if we bump into vowel. Return highest sum */

//declare arr of alphabets => will use index as value
//declare consonants var 
//declare maxSum var => will hold max sum
//declare currSum var => will hold current sum
//iterate through str using for...of loop
  //if we run into a consonant,
    //add val to currSum => find index and add 1
  //else,
    //reset currsum
  //if currSum is greater than max sum
    //update value of maxSum
//return maxSum

function solve(str) {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let maxSum = 0;
  let currSum = 0;
  for(let char of str){
    if(consonants.includes(char)){
      currSum += alpha.indexOf(char) + 1;
    }
    else{
      currSum = 0;
    }
    if(currSum > maxSum){
      maxSum = currSum;
    }
  }
  return maxSum;
}
