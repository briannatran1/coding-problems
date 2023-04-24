/*Write a function that takes in a string and returns the number of times that the 
same letter repeats twice in a row.*/

function doubleLetterCount(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){ 
        let current = str[i]; //str[0] = b; str[1] = o
        let next = str[i + 1]; //str[1] = o; str[2] = o
        if(current === next){ //b !== o; o === o
            count++; //count = 1
        }
    }
    return count; //1
}

//input: str
//output: number

//have to compare current next letter => see if they're the same
    //if yes, increment count var

//declare count var
//loop thru str using for...loop
    //declare vars for current char and next char using indexes
    //if current and next char are the same
        //increment count var
//return count var

doubleLetterCount('the jeep rolled down the hill'); //3
doubleLetterCount('bootcamp'); //1
