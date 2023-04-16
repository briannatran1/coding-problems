/*Write a function adjacent_sum that takes in an array of numbers and returns a new array 
containing the sums of adjacent numbers in the original array.*/

function adjacentSum(arr){
    let sum = [];
    for(let i = 0; i < arr.length - 1; i++){
        let current = arr[i]; //arr[0] = 3
        let next = arr[i + 1]; //arr[1] = 7
        let combined = current + next; // 3 + 7 = 10
        sum.push(combined); //[10]
    }
    return sum;
}

//input: arr
//output: arr

//declare sum arr var
//loop through arr using for...loop => indexes
    //declare current and next char vars
    //add current + next for sum 
    //push sum of both

adjacentSum([3,7,2,11]); //[10, 9, 13]
