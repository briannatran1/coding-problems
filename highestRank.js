/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/

//declare count obj to keep track of freq of nums
//declare mostFreq var => keeps track of most freq number
//iterate through arr using for...of loop
  //if key is in count,
    //increment
  //else,
    //set val to 1
  //if current number is greater than mostFreq or if there is a tie,
    //update val
//return mostFreq

function highestRank(arr){
  let count = {};
  let mostFreq = arr[0];
  for(let val of arr){
    if(val in count){
      count[val]++;
    }
    else{
      count[val] = 1;
    }
    if(count[val] > count[mostFreq] || (count[val] === count[mostFreq] && val > mostFreq)){
      mostFreq = val;
    }
  }
  return mostFreq;
}
