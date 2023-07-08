/*Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10*/

//create freq maps for each word using helper function
//iterate over count1
  //check if letter exists in count2
  //if it doesn't exist,  
    //add letter to removalCount
  //else, it does exist
    //absolute diff of freq count between letter is added to removalCount
    //remove letter from count2 to mark it as processed
//iterate over count2
  //add remaining letters to removalCount
//return removalCount

function anagramDifference(w1,w2){ //codewars, hackerrank
  let count1 = getLetterCount(w1); // {c: 1, o: 1, d: 1, e: 1, w: 1, a: 1, r: 1, s: 1}
  let count2 = getLetterCount(w2); // {h: 1, a: 2, c: 1, k: 2, e: 1, r: 2, n: 1}
  let removalCount = 0;
  for(let char in count1){
    if(!(char in count2)){
      removalCount += count1[char]; //4
    }
    else{
      removalCount += Math.abs(count1[char] - count2[char]); //0 + 0 + 1 + 1 = 2
      delete count2[char]; // {h: 1, a: 0, c: 0, k: 2, e: 0, r: 0, n: 1}
    }
  }
  for(let char in count2){
    removalCount += count2[char]; // 1 + 2 + 1 = 4
  }
  return removalCount; //4 + 2 + 4 = 10
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
