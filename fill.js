/*Write a function, fill, that accepts an array, items, and a value, fillVal.
It should return the same array with each slot in the array filled with the value passed to fill.*/

//iterate through arr using for... loop
    //replace each val with fillVal
//return items arr

function fill(items, fillVal) {
    for(let i = 0; i < items.length; i++){
        items[i] = fillVal;
    }
    return items;
}
