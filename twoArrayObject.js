/*Write a function, twoArrayObject, which accepts two arrays, keys and values. These arrays may be different lengths.

The function should return an object created from the keys and values.

If there are not enough values, the rest of keys should have a value of null.

If there not enough keys, just ignore the rest of values.*/

//create an obj
//iterate through keys arr using for...loop => ignoring rest of values if not enough
    //if the current index is less than the values arr,
        //value of key will be the elem at the index of values
    //else there are not enough values for keys,
        //value of key is null
//return obj

function twoArrayObject(keys, values) {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        if(i < values.length){
            obj[keys[i]] = values[i];
        }
        else{
            obj[keys[i]] = null;
        }
    }
    return obj;
}
