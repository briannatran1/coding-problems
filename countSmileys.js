/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;*/

//declare arrs for eyes, nose, and mouth
//declare count var 
//iterate through arr using for...loop
  //declare str var to each arr elem
  //if str length is 2 and there is both eyes and mouth,
    //increment count
  //else if str length is 3 and it includes eyes, nose, and mouth,
    //increment count
//return count

function countSmileys(arr) {
  let eyes = [':', ';'];
  let nose = ['-', '~'];
  let mouth = [')', 'D'];
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    let str = arr[i];
    if(str.length === 2 && eyes.includes(str[0]) && mouth.includes(str[1])){
      count++;
    }
    else if(str.length === 3 && eyes.includes(str[0]) && nose.includes(str[1]) && mouth.includes(str[2])){
      count++;
    }
  }
  return count;
}
