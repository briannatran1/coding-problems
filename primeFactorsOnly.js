/*Write a function that generates factors for a given number.

The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]*/
 
//declare a new arr
//initialize divisor var to smallest prime num (2)
//while num is greater than 1,
  //if num is divisible by divisor,
    //push divisor to factors arr
    //update num by dividing divisor, to find repeat factors
  //else,
    //increment divisor
//return factors

function primeFactors(num) {
  let factors = [];
  let divisor = 2;
  while(num > 1){
    if(num % divisor === 0){
      factors.push(divisor);
      num = num / divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}
