/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/

//create count obj 
//iterate through numbers using for...of loop
  //if key is in obj,
    //increment
  //else,
    //set val to 1
//iterate through obj,
  //return key (num) that only has a value of 1

function stray(numbers) {
  let count = {};
  for(let val of numbers){
    if(val in count){
      count[val]++;
    }
    else{
      count[val] = 1;
    }
  }
  for(let key in count){
    if(count[key] === 1){
      return Number(key);
    }
  }
}
