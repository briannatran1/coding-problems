/*Write a function, greatestCommonDivisor, which accepts two whole numbers, num1 and num2.
It should return the greatest common divisor between both numbers.

The greatest common divisor of two whole numbers is the largest whole number that divides both numbers evenly.*/

//declare gcd var
//find the smallest num between the two
//iterate through smallest num
    //if index is divisible by both nums,
        //update gcd var
//return gcd

function greatestCommonDivisor(num1, num2) {
    let gcd = 1;
    let smallest = Math.min(num1, num2);
    for(let i = 1; i <= smallest; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}
