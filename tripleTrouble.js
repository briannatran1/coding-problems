/*Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0*/

/*Go through num1 and see if they have a triple. Look at num2 and see if they have the corresponding double. If yes, return 1. 
Otherwise, return 0*/

//convert num1 and num2 into strs 
//declare var to hold triple or double digit
//iterate using for...loop to check for a triple and double
  //declare triple var => number repeats three times
  //declare double var => number repeats twice
  //if triple is included in str1 and double is included in str2,
    //return 1
//otherwise, return 0

function tripledouble(num1, num2) {
  let str1 = num1.toString()
  let str2 = num2.toString()
  for(let i = 0; i < 10; i++){
    let triple = i.toString().repeat(3);
    let double = i.toString().repeat(2);
    if(str1.includes(triple) && str2.includes(double)){
      return 1;
    }
  }
  return 0;
}
