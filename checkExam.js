/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.*/

/*Compare arr2 to arr1. Add 4 if elems are the same. Subtract 1 if elems are not the same. Continue if arr2 has a blank elem.*/

//declare total var => will store score of students exams
//iterate through arr1 using for... loop
  //if arr1 and arr2 vals are equal,
    //add 4 to total
  //else if arr2 val is empty,
    //continue
  //else
    //subtract 1
//if total is less than 0,
  //return 0
//return total

function checkExam(arr1, arr2) {
  let total = 0;
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr2[i]){
      total += 4;
    }
    else if(arr2[i] === ''){
      continue;
    }
    else{
      total -= 1;
    }
  }
  if(total < 0){
    return 0;
  }
  return total;
}
