/**
creating a function called twoNumSum that takes in an array of numbers, numbers, and a target sum, 
target, as its parameters. The function should return an array containing the two numbers from 
the input array that sum up to the target sum, or null if no such pair of numbers exist 
in the array:
**/

//input: arr, number
//output: arr

// ex numbers [1 2 4 4], target 8 -> [4, 4]
// ex numbers [ 0 -5 6 8], target 1 -> [-5, 6]

// EDGE CASES
// 1. empty --> array   CLARIFYING QUESTION ? what happens if im given an empty array
// 2. what if none of the elements in the array add up to the target? 
// 3. what if there is only one number ? return an empty array

// PSEUDO CODE
//declare answer arr var
//iterate using i & j nested loops => j = i + 1 (compares next num), i = length - 1 to give room for j
  //if a num in i and j = target num, 
    //push those 2 nums to answer arr
//if the answer.length > 0, return answer arr
//else, return null => no pairs exist

function twoNumSum(numbers, target) { //[1,2,4,4], target = 8
  let answer = []; //[8]
  for (let i = 0; i < numbers.length - 1; i++) { //4
    for (let j = i + 1; j < numbers.length; j++) { //4
      if (numbers[i] + numbers[j] === target) { // 4 + 4 = 8
        answer.push(numbers[i], numbers[j]); //push 8 to arr
      }
    }
  }
  return answer.length ? answer : null;
} 

//IF WE ONLY CARE ABOUT THE FIRST PAIR:
function twoNumSum(numbers, target) { //[1,2,4,4], target = 8
  for (let i = 0; i < numbers.length - 1; i++) { //4
    for (let j = i + 1; j < numbers.length; j++) { //4
      if (numbers[i] + numbers[j] === target) { // 4 + 4 = 8
        return [numbers[i], numbers[j]]; //[4, 4]
      }
    }
  }
  return null;
} 

twoNumSum([1,2,4,4], 8); //[4, 4]
