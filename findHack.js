/*Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]],
["name2", 140, ["B", "A", "A", "A"]],
["name3", 200, ["B", "A", "A", "C"]]
];
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];*/

/*Given an arr of arrays  */

/*First, we have to calculate real total in arr which is the 3rd element. Compare real total to given total. If they are not the same, they are hacked. If total is over 200,
they are hacked. If there are 5+ courses with a grade of B or above, add 20 points to real total.*/


//declare hacked arr => will hold names of hacked people
//iterate through array of arrays,  
  //declare realTotal var => will hold real total points
  //find arr of scores in array and declare var for easy access
  //declare name var
  //declare given score var
  //declare realTotal var => will hold real total points
  //declare count of each letter grade
  //iterate through scores arr using for... loop
    //if statements for each letter grade
      //add corresponding points to realTotal
      //increment letter count
    //if scores length is greater than or equal to 5 and countA + countB is the length of scores,
      //add 20 points to realTotal
  //if realTotal is greater than 200,
    //realTotal is 200 (needs to be capped)
  //if realTotal is not the same as given,
    //push named to hacked
//return hacked

function findHack(arr) {
  let hacked = [];

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i][0];
    let given = arr[i][1];
    let scores = arr[i][2];

    let realScore = 0;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;

    for (let j = 0; j < scores.length; j++) {
      if (scores[j] === "A") {
        realScore += 30;
        countA++;
      } else if (scores[j] === "B") {
        realScore += 20;
        countB++;
      } else if (scores[j] === "C") {
        realScore += 10;
        countC++;
      } else if (scores[j] === "D") {
        realScore += 5;
        countD++;
      }
      if (scores.length >= 5 && countB + countA === scores.length) {
        realScore += 20;
      }
    }
    if (realScore > 200) {
      realScore = 200;
    }
    if (given !== realScore) {
      hacked.push(name);
    }
  }
  return hacked;
}
