/*Create a function divisibleByFivePairSum that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.*/

function divisibleByFivePairSum(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((arr[i] + arr[j]) % 5 === 0){
                result.push([i, j]); //returning indices not the numbers in arr
            }
        }
    }
    return result;
}

//input: arr
//output: arr

//declare result arr var
//iterate through arr using nested loop => i, j
    //if the sum at both indexes is divisible by 5, 
        //push pair of indices to result
//return result
