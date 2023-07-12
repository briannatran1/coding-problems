/*Write a function, binarySearch, which accepts a sorted array and a sought value.
It should return the index at which sought exists. Otherwise, return -1.*/

//initialize 2 pointers for left and right side of arr
//while left is less than or equal to the right side,
    //calculate the middle index and make sure it's an integer
    //if elem at the middle is the val,
        //return middle index
    //else if elem at middle is less than the sought val,
        //sought val is in right half -> update left pointer to middle + 1
    //else,
        //sought val is in left half -> update right pointer to middle - 1
//return -1

function binarySearch(arr, val) { //[1,2,3,4], 1
    let left = 0;
    let right = arr.length - 1; //3, 1, 0
    while(left <= right){
        let middle = Math.floor((left + right) / 2); //2, 1, 0
        if(arr[middle] === val){ //arr[0] = 1 === 1
            return middle; //0
        }
        else if(arr[middle] < val){
            left = middle + 1;
        }
        else{ //arr[2] = 3 > 1; arr[1] = 2 > 1
            right = middle - 1; //right = middle - 1 = 1; right = 1-1 = 0
        }
    }
    return -1;
}
