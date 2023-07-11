/*Write a function, isPrime, which takes a number, num. It should return true/false if num is a prime number.

A prime number is a number greater than 1 which is only divisible by 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, and 17.
Notice that 4 is not prime, since 4 = 2 * 2. Similarly, 6 is not prime since 6 = 2 * 3.*/

//if num is less than 2 or is NaN,
    //return false
//iterate through num starting at 2 (smallest prime num),
    //if num is divisble by i,
        //return false

function isPrime(num) {
    if(num < 2 || isNaN(num)){
        return false;
    }
    for(let i = 2; i < num ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
