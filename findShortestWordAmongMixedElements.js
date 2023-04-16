/*Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.*/

function findShortestWordAmongMixedElements(arr) {
  let shortestWord = '';
  for (let val of arr) {
    if (typeof val === 'string' && (shortestWord === '' || val.length < shortestWord.length)) {
      shortestWord = val;
    }
  }
  return shortestWord;
}

//declare shortest var => will hold shortest string
//iterate through arr using for...of loop
    //if val is a string,
        //if val length is shorter than shortest,
            //update shortest val
//return shortest
