/*Write a function, takeRight, which accepts an array, items, and an optional number, n.
It creates and returns a copy of items starting from the end for the value number of elements.

If a n is not passed the function should return a new array with the last element.

If the second parameter is greater than the length of items, return a copy of items.*/

//if n is undefined,
    //return last elem in new arr
//if n > items length,
    //return copy of items
//if n is zero,
    //return an empty arr
//return a copy of items starting at the end of the arr

function takeRight(items, n) {
    if(n === undefined){
        return [items[items.length - 1]];
    }
    if(n > items.length){
        return items.slice();
    }
    if(n === 0){
        return [];
    }
    return items.slice(-n)
}
