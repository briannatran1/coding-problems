/*Write a function, addKeyAndValue, which accepts an array of objects, objs, a key, and a value and returns the
array passed to the function with the new key and value added to each object.*/

//iterate through arr of objs
    //add key/value pair to each obj
//return objs

function addKeyAndValue(objs, key, value) {
    for(let obj of objs){
        obj[key] = value;
    }
    return objs;
}
