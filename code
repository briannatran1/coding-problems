/*Write a function that accepts an array of arrays containing numberes and returns an object with
each key being length, and each value is the product of the sum of each subarray.*/

/*Given an array of arrays, return an object where the key is the length of a subarray and the value
is the product of the sum of each subarray with the corresponding length.*/

//declare an obj => stores length and values
//iterate through arr of arrays using for...of loop
    //if length of value doesn't exist in the obj,
        //add it
    //else,
        //multiply sum of subarr to the value of the key
//return obj

//helper function => adds sum of subarrs
//declare sum var => stores sum of 1 subarr
//iterate through arr using for...of loop
    //add each value to sum var
//return sum

function sumArray(arr){
    let sum = 0;
    for(let val of arr){
        sum += val;
    }
    return sum;
}

function clusterFuck(matrix){
    let obj = {};
    for(let arr of matrix){
        if(obj[arr.length] === undefined){ //2 => {2: 4}
            obj[arr.length] = sumArray(arr);
        }
        else{ 
            obj[arr.length] *= sumArray(arr);  //{1: 4} {2: 4(2+4) => 2: 24}
        }
    }
    return obj;
}
//OR

function clusterFuck(matrix){
    let obj = {};
    for(let arr of matrix){
        if(!(arr.length in obj)){ //2 => {2: 4}
            obj[arr.length] = sumArray(arr);
        }
        else{ 
            obj[arr.length] *= sumArray(arr);  //{1: 4} {2: 4(2+4) => 2: 24}
        }
    }
    return obj;
}

//([[1], [4], [1,2,3,4], [1,3], [2,4], [1,1,1,1]]) => {1: 4, 2: 24, 4: 40}
