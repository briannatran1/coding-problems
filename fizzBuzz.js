/*Write a method fizz_buzz(max) that takes in a number max and returns an array 
containing all numbers greater than 0 and less than max that are divisible 
by either 4 or 6, but not both.*/

function fizzBuzz(max){
    let arr = [];
    for(let i = 0; i < max; i++){ //i = 4
        if(i % 4 === 0 && i % 6 !== 0 || i % 4 !== 0 && i % 6 === 0 ){ //4 % 4 === 0 && 4 % 6 !== 0
            arr.push(i); //[4]
        }
    }
    return arr;
}

//input: number
//output: arr

//declare arr var
//iterate through max number => i < max
    //if num is divisible by 4 OR 6 
        //push to arr
//return arr after iterating

fizzBuzz(20); // [4, 6, 8, 16, 18]
fizzBuzz(15); // [4, 6, 8]
