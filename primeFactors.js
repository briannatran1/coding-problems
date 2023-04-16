/*Write a method prime_factors that takes in a number and returns an array 
containing all of the prime factors of the given number.*/

function primeFactors(num){
    let factors = [];
    for(let i = 1; i <= num; i++){ //factors => [1,2,3,4,6,8,12,24]
        if(num % i === 0 && isPrime(i)){ //2, 3
            factors.push(i); //[2, 3]
        }
    }
    return factors; //[2, 3]
}

//HELPER FUNCTION
function isPrime(num){
    if(num < 2){ //1
        return false; //false
    }
    for(let i = 2; i < num; i++){ //4, 6, 8, 12, 24
        if(num % i === 0){ //all divisible by 2
            return false; //false
        }
    }
    return true; //2, 3 => true
}

//input: number
//output: arr

//thots
    //find all factors first (not just prime)
    //push to arr

//declare factors var
//loop thru arr starting at i = 1
    //if num is divisible by i (another num) push i to arr => not specific to primes yet
//return factors arr

//create a helper function to check if factor is prime
//if statement for num < 2 => false
//loop through num starting at 2
    //if num is divisible by any num starting at 2, return false => not prime
//return true

//now add isPrime function to if statement in primeFactors to check if factor is a prime number

primeFactors(24); //[2, 3]
//factors of 24 => 1,2,3,4,6,8,12,24
