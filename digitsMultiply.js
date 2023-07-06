/*You are given a positive number. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive integer (number).

Output: The product of the digits as an integer (number).*/

//declare product var
//convert number to str and split into arr
//iterate through arr using for...of loop
    //if val is not a 0,
        //multiply to product var
//return product

function digitsMultiply(num){ //123405
    let product = 1;
    let arr = num.toString().split(''); //['1', '2', '3', '4', '0', '5']
    for(let val of arr){
        if(val !== '0'){
            product *= Number(val); 
        }
    }
    return product;
}
