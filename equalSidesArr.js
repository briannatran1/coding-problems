/*You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to 
the sum of the integers to the right of N. If there is no index that would make this happen, return -1.*/

//declare totalSum var => finds total sum of arr
//iterate through arr using for...of loop
  //add val to totalSum
//declare leftSum var 
//iterate through arr using for...loop 
  //declare rightSum var => substract current val and left sum from total
  //if leftSum is equal to rightSum,
    //return index
  //else,
    //add val to leftSum
//if no index is found, return -1


function findEvenIndex(arr){
  let total = 0;
  for(let val of arr){
    total += val;
  }
  let leftSum = 0;
  for(let i = 0; i < arr.length; i++){
    let rightSum = total - leftSum - arr[i];
    if(leftSum === rightSum){
      return i;
    }
    else{
      leftSum += arr[i];
    }
  }
  return -1;
}
