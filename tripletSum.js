//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.

/*Make a new array without duplicate numbers. Sort new arr in descending order and add first 3 numbers to find the max sum.*/

//declare maxSum var 
//declare noDupes arr
//iterate through numbers using for...of loop
  //if val is not in noDupes, push to noDupes
//sort noDupes in descending order
  //add first 3 indexes to maxSum
//return maxSum

function maxTriSum(numbers){
  let maxSum = 0;
  let noDupes = [];
  for(let val of numbers){
    if(!noDupes.includes(val)){
      noDupes.push(val);
    }
  }
  noDupes.sort((a, b) => b - a);
  maxSum = noDupes[0] + noDupes[1] + noDupes[2];
  return maxSum;
}
