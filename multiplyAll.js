/*To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.*/

//return a function that accepts a number
  //apply multiplication to each val in arr and return

function multiplyAll(arr) {
  return function(num) {
    return arr.map(function(x) {
      return x * num;
    });
  }
}
