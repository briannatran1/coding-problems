/*Write a function that accepts an array containing only 0s and 1s. Return a number which is the 
longest streak of 1s in a row*/

//input: arr
//output: number

//thots
//need 2 vars => longest streak and a temporary streak to compare

//declare streak variable
//declare longerStreak variable
//loop through array using for...loop (;;)
    //if statement checking to see if value at arr[i] is 1 or 0
    //if 1, increment streak variable
    //if 0 or at end of arr
        //if streak > longerStreak, replace value 
         //reset streak to zero to start over 
//return longerStreak

function longestStreak(arr){
    let streak = 0;
    let longerStreak = 0;
    for(let i = 0; i < arr.length; i++){ //1; 1, 1
        if(arr[i] === 1){
            streak++; //streak = 1; streak = 2
        }
        if(arr[i] === 0 || i === arr.length - 1){ //0; 0
            if(streak > longerStreak){ // 1 > 0; 2 > 1
                longerStreak = streak; //longerStreak = 1; 2
            }
            streak = 0; //resets back to zero
        }
    }
    return longerStreak;
}

longestStreak([1, 0, 1, 1, 0, 1, 1, 1]); //3
