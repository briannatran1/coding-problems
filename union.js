/*Write a function, union, which accepts a variable number of arrays, It should return a new array of unique values from all the input arrays.*/

//concat all arrays into a single arr
//get unique vals from mergedArr by creating a new Set
//convert set back to arr
//return arr

function union(...arrs) {
    let mergedArr = [].concat(...arrs);
    let uniqueVals = new Set(mergedArr);
    let result = Array.from(uniqueVals);
    return result;
}
