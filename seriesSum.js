/*Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.*/

/*Take the given number and add that number to the pattern to get another number. Return it as a string*/

//declare sum var
//declare denominator var => will change denominator by 3
//iterate through n using for...loop
  //add 1 / denom to sum
  //add 3 to denominator each iteration
//return sum as a decimal and string

function SeriesSum(n){
  let sum = 0;
  let denominator = 1;
  for(let i = 0; i < n; i++){ //2
    sum += 1 / denominator; //1 + 1/4 = 1.25
    denominator += 3; // 4
  }
  return sum.toFixed(2); //'1.25'
}
