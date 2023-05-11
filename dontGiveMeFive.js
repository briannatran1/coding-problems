/*In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!*/

/*Given a range of 2 numbers, count all the numbers between those 2 numbers that do not contain a 5. Include the start and end numbers.*/

//declare count var
//iterate through start and end numbers using for...loop
  //if number does not include a 5, => need to turn to str to us includes
    //increment count
//return count

function dontGiveMeFive(start, end) {
  let count = 0;
  for(let i = start; i <= end; i++){
    if(!String(i).includes(5)){
      count++;
    }
  }
  return count;
}
