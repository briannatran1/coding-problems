//Go through string and find words that have 5+ letters. If they do, reverse word. If not, do not change word

//declare result arr
//split str into arr 
//iterate through arr using for... of loop
  //if word has 5 letters or more,
    //push reverse word to result
  //else,
    //push word to result
//return result arr joined into str

function spinWords(str){
  let result = [];
  let arr = str.split(' ');
  for(let word of arr){
    if(word.length >= 5){
      let reversed = word.split('').reverse().join('');
      result.push(reversed);
    }
    else{
      result.push(word);
    }
  }
  return result.join(' ');
}
