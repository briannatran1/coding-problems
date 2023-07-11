/*Write a function, linearSearch, which accepts an array, items, and a sought value. It should return the index at which the sought exists.
If the value is not in the items, return -1.*/

//iterate through items using for...loop
    //if val at index is equal to sought val,
        //return index
//return -1

function linearSearch(items, val) {
    for(let i = 0; i < items.length; i++){
        if(items[i] === val){
            return i;
        }
    }
    return -1;
}
