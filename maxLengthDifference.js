/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).*/

//find longest and shortest word in both arrays. pick longest and shortest word between the two

//declare max1, short1, max2, short2 => will hold lengths of words
//if either array is empty,
  //return -1
//iterate through a1 using for...of loop
  //if word length is greater than max1, 
    //update max1 value
  //if word length is less than min1,
    //update min1 value
//iterate through a2 using for...of loop
  //if word length is greater than max2, 
    //update max2 value
  //if word length is less than min2,
    //update min2 value
//return the greatest differnce between max and min

function mxdiflg(a1, a2) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;
  if(a1.length === 0 || a2.length === 0){
    return -1;
  }
  for(let word of a1){
    if(word.length > max1){
      max1 = word.length;
    }
    if(word.length < min1){
      min1 = word.length;
    }
  }
  for(let word of a2){
    if(word.length > max2){
      max2 = word.length;
    }
    if(word.length < min2){
      min2 = word.length;
    }
  }
  return Math.max((max1 - min2), (max2 - min1));
}
