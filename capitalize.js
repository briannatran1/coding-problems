/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.*/

//Separate odd and even indices of strings. Capitalize each accordingly and return each string to an arr

//declare even and odd strings => answer is 2 strings
//declare arr to store strings
//iterate through str using for...loop
  //if index is even, 
    //add capitalize letter to even 
    //add letter to odd
  //else,
    //add letter to even
    //add capitalize letter to odd
//push even and odd str to arr


function capitalize(str){
  let even = '';
  let odd = '';
  let result = [];
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      even += str[i].toUpperCase();
      odd += str[i];
    }
    else{
      even += str[i];
      odd += str[i].toUpperCase();
    }
  }
  result.push(even, odd);
  return result;
}
