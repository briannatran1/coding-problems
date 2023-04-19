/*Given a string, find the length of the longest substring without repeating characters.*/

//13:40

function longestSubstring(str){ //'pwwkew'
    let streak = '';
    let longestStreak = 0;
    for(let char of str){
        if(streak.includes(char)){ //w is already in streak => 'pw'
            let index = streak.indexOf(char); //index = 2
            streak = streak.slice(index); //streak => starts at 2nd w
        }
        else{
            streak += char; //'pw'; 'wke'
        }
        if(streak.length > longestStreak){ //2 > 0; 3 > 2
            longestStreak = streak.length; //2; 3
        }
    }
    return longestStreak; //3
}

//input: str
//output: number

//declare streak var => keeps track of current substring 
//declare longestStreak var for longest substring
//iterate through str using for...of loop
    //if char is in streak var => we found a repeat char
        //find index of char in streak
        //slice streak after repeated char => creates new streak starting at repeated char
    //else,
        //append char to streak since it is not in streak yet
    //if streak length greater than longestStreak
        //replace val
//return longestStreak

console.log(longestSubstring('abcabcbb')); //3
console.log(longestSubstring('bbbbb')); //1
console.log(longestSubstring('pwwkew')); //3
