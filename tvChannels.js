/*Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}*/

//declare result arr
//sort arr in alphabetical order
//iterate through arr using for...loop
  //if channel does not exist in result arr,
    //push channel
//declare obj var
//iterate through result arr using for...loop
  //assign key to index, starting at 0 and key value to element of index in result
//return obj


function redarr(arr) {
  let result = [];
  arr.sort();
  for(let val of arr){
    if(!result.includes(val)){
      result.push(val);
    }
  }
  let obj = {};
  for(let i = 0; i < result.length; i++){
      obj[i] = result[i];
  }
  return obj;
}
