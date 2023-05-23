/*Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. 
The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.*/

//flatten arr using flat and apply reduce with an empty obj as the acc
  //if letter is already in obj,
    //increment
  //else
    //set val to 1
  //update acc

function countElements(input){
  return input.flat().reduce(function(acc, letter){
    if(letter in acc){
      acc[letter]++;
    }
    else{
      acc[letter] = 1;
    }
    return acc;
  }, {});
}

let input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
/* {
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  f: 2,
  g: 1,
} */
