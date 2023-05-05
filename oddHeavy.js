/*An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.
write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.*/

/*Given an array, separate odd and even numbers. If there is an even number that is greater than any number in the odd arr, return false*/

//if the arr is empty,
  //return false
//declare odds arr
//declare evens arr
//iterate through arr using for...of loop
  //if val is even,
    //push to even
  //else,
    //push to odd
//if there are no odd numbers,
  //return false
//else if there are not even numbers
  //return true
//else if smallest odd number is greater than largest even number,
  //retrurn true
//return false

function isOddHeavy(arr){
  if(arr.length === 0){
    return false;
  }
  let odds = [];
  let evens = [];
  for(let val of arr){
    if(val % 2 === 0){
      evens.push(val);
    }
    else{
      odds.push(val);
    }
  }
  if (odds.length === 0) {
    return false;
  } 
  else if (evens.length === 0) {
      return true;
  } 
  else if (Math.min(...odds) > Math.max(...evens)) {
      return true;
  }
  return false;
}
