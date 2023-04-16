/*Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.*/

function findSmallestNumberAmongMixedElements(arr) {
    let smallest = Infinity;
    for(let val of arr){
        if(typeof val === 'number' && val < smallest){
            smallest = val;
        }
    }
    if(smallest === Infinity){
        return 0;
    }
    else{
        return smallest;
    }
}

//declare smallest var
//iterate through arr using for...of loop
    //if val is a number and it's less than smallest,
        //update smallest value to current val
//if smallest is infinity,
    //return 0
//else,
    //return smallest
