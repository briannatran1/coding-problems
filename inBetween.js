/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

//create a new arr var
//iterate through a and b
  //push index to new arr
//return arr

function between(a, b) {
  let result = [];
  for(let i = a; i <= b; i++){
    result.push(i);
  }
  return result;
}
