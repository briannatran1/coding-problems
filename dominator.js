/*A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.*/

//create a counter obj to keep track of numbers
//delcare length and dominator vars
  //set dominator = -1
//find a key with a value that is greater than half of the length of the arr
  //if value is found, set dominator to key number
  //break out of loop
//return dominator

function dominator(arr) {
  let counter = {};
  let length = arr.length;
  let dominator = -1;
  for(let val of arr){
    if(val in counter){
      counter[val]++;
    }
    else{
      counter[val] = 1;
    }
  }
  for(let key in counter){
    if(counter[key] > length / 2){
      dominator = Number(key);
      break;
    }
  }
  return dominator;
}
