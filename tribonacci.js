/*Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)*/

//if n is zero,
  //return an empty arr
//if n is 1,
  //return first element in arr
//if n is 2,
  //return first two elements in arr
//iterate through n using for...loop => substract 3 from n since first 3 vals are already given
  //declare vars for last 3 elements
  //declare var for nextElem => sum of last 3 elements
  //push nextElem to arr
//return arr

function tribonacci(arr, n){
  if(n === 0){
    return [];
  }
  if(n === 1){
    return [arr[0]];
  }
  if(n === 2){
    return [arr[0], arr[1]];
  }
  for(let i = 0; i < n - 3; i++){
    let last = arr[arr.length - 1];
    let secondLast = arr[arr.length - 2];
    let thirdLast = arr[arr.length - 3];
    let nextElem = last + secondLast + thirdLast;
    arr.push(nextElem);
  }
  return arr;
}
