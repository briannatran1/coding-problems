/*Write a function, nth, which accepts an array, items, and a number, idx. It should return the element at that index in the array.
If idx is negative, the nth element from the end is returned instead.

You can assume that number will always be between the negative value of the array length, and the array length minus 1.*/

//if idx is neg,
    //return elem starting at end of arr added to index, which moves index in reverse direction
 //return elem at idx

function nth(items, idx) {
    if(idx < 0){
        return items[items.length + idx];
    }
    return items[idx];
}
