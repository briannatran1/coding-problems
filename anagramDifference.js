/*Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10*/

//create freq maps for each word using helper function
//

function anagramDifference(w1,w2){
  let count1 = getLetterCount(w1);
  let count2 = getLetterCount(w2);
  let removalCount = 0;
  for(let char in count1){
    if(!(char in count2)){
      removalCount += count1[char];
    }
    else{
      removalCount += Math.abs(count1[char] - count2[char]);
      delete count2[char];
    }
  }
  for(let char in count2){
    removalCount += count2[char];
  }
  return removalCount;
}

function getLetterCount(word){
  let count = {};
  for(let char of word){
    if(char in count){
      count[char]++;
    }
    else{
      count[char] = 1;
    }
  }
  return count;
}
