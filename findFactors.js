/*Write a function, findFactors, which accepts a number, num. It should return an array of all the numbers which it is divisible by,
starting from 1 and going up to the number.*/

//declare arr var
//iterate through num
    //if index is divisble by num,
        //push index to arr
//return arr

function findFactors(num) {
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    return arr;
}
