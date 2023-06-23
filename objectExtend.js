/*Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}*/

//declare new obj
//create a function to check if parameter is an obj
//iterate over objs
  //use isObject function to check if it's a valid obj
    //if yes, iterate over obj properties using for...in loop
      //check if prop is in obj and not in merged obj,
        //if both true, assign property and value to merged obj
//return merged obj

function extend(...objs) {
  let mergedObj = {};
  
  function isObject(obj){
    return typeof obj === 'object' && obj !== null;
  }
  for(let obj of objs){
    if(isObject(obj)){
      for(let key in obj){
        if(obj.hasOwnProperty(key) && !mergedObj.hasOwnProperty(key)){
          mergedObj[key] = obj[key];
        }
      }
    }
  } 
  return mergedObj;
}
