/*The fibonacci sequence is a sequence of numbers whose first and second elements 
are 1. To generate further elements of the sequence we take the sum of the previous 
two elements.
For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. 
Write a method fibonacci that takes in a number length and returns the fibonacci 
sequence up to the given length.*/

function fibonacci(length){ //length = 6
    if(length === 0){
        return [];
    }
    if(length === 1){
        return [1];
    }
    let arr = [1, 1];
    for(let i = 2; i < length; i++){ //length >= 2
        let last = arr[arr.length - 1]; //last = 1; 2
        let secondLast = arr[arr.length - 2]; //1; 1
        let nextElem = last + secondLast; //1 + 1 = 2; 1 + 2 = 3
        arr.push(nextElem); //[1, 1, 2, 3]
    }
    return arr; //[1,1,2,3,5,8]
}

//input: number
//output: arr

//edge cases => length = 0, 1

//declare arr var = [1, 1] since first 2 numbers will always be 1
//loop through length starting at i = 2
    //declare last var => arr.length - 1
    //declare secondLast var => arr.length - 2
    //declare nextElem var => last + secondLast => 'sum of previous 2 elems
    //push nextElem into arr
//return arr

fibonacci(6); //[1, 1, 2, 3, 5, 8]
fibonacci(8); //[1, 1, 2, 3, 5, 8, 13, 21]
