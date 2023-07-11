/*Write a function, take, which accepts an array, items, and an optional count. It should create a copy of items starting from the
beginning and containing count number of elements.

If a count is not passed the function should return an array with the first element. If count is greater than the length of the array,
return a copy of the entire array.

take([1, 2, 3]); // [1]
take([1, 2, 3], 1); // [1]
take([1, 2, 3], 2); // [1, 2]
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []*/

//if count is greater than length of arr,
    //return copy of entire arr
//if count is undefined ie, not passed,
    //return the first element in an arr
//return arr starting from beg ending with count number of elems

function take(arr, count) {
    if(count > arr.length){
        return arr.slice();
    }
    if(count === undefined){
        return [arr[0]];
    }
    return arr.slice(0, count);
}
