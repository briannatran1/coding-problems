/*Write a function, omit, which accepts an object, obj, and an array, keys.
It should return a new object with the keys from the array omitted.
If an array element doesn’t correspond to a valid key, the key is simply ignored.*/

//create new obj
//iterate through obj using for...in loop
    //if key is not included in keys arr,
        //add value pair to newObj
//return newObj

function omit(obj, keys) {
    let newObj = {};
    for(let key in obj){
        if(!keys.includes(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
