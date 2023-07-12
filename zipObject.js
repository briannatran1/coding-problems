/*Write a function, zipObject, which accepts two arrays, keys and values.
It returns an object with the keys from keys and values from values.

If keys is longer than values, the value in the object should be undefined.
If values is longer, ignore the additional values.*/

//declare obj var
//iterate over keys arr using for...loop
    //

function zipObject(keys, values) {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        obj[keys[i]] = values[i];
    }
    return obj;
}
