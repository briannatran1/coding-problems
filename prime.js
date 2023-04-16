/*Write a method prime? that takes in a number and returns a boolean, 
indicating whether the number is prime. A prime number is only divisible by 
1 and itself.*/

function prime(number){ //-5 //4
    if(number < 2){
        return false; //false
    }
    for(let i = 2; i < number; i++){ 
        if(number % i === 0){ //4 % 2 === 0
            return false; //false
        }
    }
    return true; //if num doesn't meet above requirements
}

//input: number
//output: boolean

//edge case => if num < 2
    //return false
//loop through number starting at i = 2
    //if number is divisible by any number, return false
//return true

prime(2); //true
prime(4); //false
prime(-5); //false
