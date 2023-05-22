/*If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there 
aren't any positive numbers, return 0.*/

//filter out all negative numbers
//use reduce on positive arr to calculate sum of all vals
  //add val to acc
  //return acc to update 

function positiveSum(input){
  let positive = input.filter(val => val > 0);
  return positive.reduce(function(acc, val){
    acc += val;
    return acc;
  }, 0);
}

let input = [1, -4, 12, 0, -3, 29, -150]; // 42
