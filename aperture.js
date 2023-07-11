/*Write a function, aperture, which accepts a number, n and an array, items. It should return a new array, composed of subarrays the
size of the number with consecutive elements.

If the number passed to this function is greater than the length of the array or less than 1, an empty array is returned.*/

//if n is greater than items length or less than 1,
    //return an empty arr
//declare result arr
//iterate from index 0 to items.length - n => only considers positions where subarray size 'n' could be formed
    //extract subarr and push to result
//return result

function aperture(n, items) { //3, [1, 2, 3, 4]
    if(n > items.length || n < 1){
        return [];
    }
    let result = [];
    for(let i = 0; i <= items.length - n; i++){ // i <= 1
        result.push(items.slice(i, i + n)); //i = 0 -> items.slice(0, 3) => [1, 2, 3]
    }
    return result; //[[1, 2, 3], [2, 3, 4]]
}
