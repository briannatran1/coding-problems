/*Write a function, mergeSortedArrays, which accepts two arrays, a and b, and returns a new array with all values in both arrays sorted.

IMPORTANT Do this without using the built-in .sort() method.*/

//declare merged arr
//use 2 pointer method => i and j
//while both arrs have length,
    //if first item in a is less than or equal to first item in b,
        //remove it from a, and push to merged
    //else,
        //remove item from b and push to merged
//while there are still values in a,
    //remove from a, and push to merged
//while there are still values in b,
    //remove from b and push to merged
//return merged

function mergeSortedArrays(a, b) {
    let merged = [];
    while(a.length > 0 && b.length > 0){
        if(a[0] <= b[0]){
            merged.push(a.shift());
        }
        else{
            merged.push(b.shift());
        }
    }
    while(a.length > 0){
        merged.push(a.shift());
    }
    while(b.length > 0){
        merged.push(b.shift());
    }
    return merged;
}

//OR

//use 2 pointer method
//declare merged arr
//while i is less than length of a and j is less than length of b,
    //if val at i in a is less than val at j in b,
        //push a val to merged
        //increment i
    //else,
        //push b val to merged
        //increment j
//while i is less than length of a,
    //push val to merged
    //increment i
//while j is less than length of b,
    //push val to merged
    //increment j
//return merged

function mergeSortedArrays(a, b){
    let i = 0;
    let j = 0;
    let merged = [];
    while(i < a.length && j < b.length){
        if(a[i] <= b[j]){
            merged.push(a[i]);
            i++;
        }
        else{
            merged.push(b[j]);
            j++;
        }
    }
    while(i < a.length){
        merged.push(a[i]);
        i++;
    }
    while(j < b.length){
        merged.push(b[j]);
        j++;
    }
    return merged;
}
