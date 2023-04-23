//Go through array and keep track of how many times a number appears. If it appears an odd number of times, return val. Otherwise, return 0

//declare count obj
//iterate through arr
  //if num is in count obj,
    //increment
  //else,
    //set equal to 1
//iterate through obj
  //if value is odd,
    //return key converted to a number 
//otherwise, return 0

function findOdd(arr) {
  let count = {};
  for(let val of arr){
    if(val in count){
      count[val]++;
    }
    else{
      count[val] = 1;
    }
  }
  for(let num in count){
    if(count[num] % 2 !== 0){
      return Number(num);
    }
  }
  return 0;
}
