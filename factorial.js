/*Write a method factorial(num) that takes in a number num and returns the product of 
all numbers from 1 up to and including num.*/

function factorial(num){
    let product = 1;
    for(let i = 1; i <= num; i++){
        product *= i; //shorthand for product = product * i
    }
    return product;
}

//input: num
//output: num

//declare product var => 1 (if prod = 0, prod will always be 0)
//iterate through num starting at i = 1
    //multiply each num in loop
//return product var

factorial(3); //6
factorial(5); //120
