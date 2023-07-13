/*Write a function, swap, which accepts an array, items, and two indexes.
The function should mutate the array to swap the items at the indexes.
You can assume that each index will be present in the array.*/

//use arr destructuring to swap vals at indexes

function swap(items, idx1, idx2) {
    [items[idx1], items[idx2]] = [items[idx2], items[idx1]];
    return items;
}
