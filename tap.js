/*Write a function, tap, which accepts an array, items, and a callback function, cb. The callback function should be invoked on the
array and then the returned value should be the array regardless of what the callback returns.*/

//invoke cb function and pass items as an argument
//return items arr

function tap(items, cb) {
    cb(items);
    return items;
}
