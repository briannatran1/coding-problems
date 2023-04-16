/* Given a string of lower case letters, return a new string with each letter followed by the number of times it appears in the str*/

function strExpand(str){
    let newStr = '';
    let counter = {};
    for(let char of str){
        if(counter[char] === undefined){ 
            counter[char] = 1; //{z: 2, e: 2, a: 1}
        }
        else{
            counter[char]++;
        }
    }
    for(let key in counter){
        newStr += key + counter[key]; //'z2e2a1'
    }
    return newStr;
}

//input: str
//output: str

//declare newStr var
//declare a counter obj => keeps track of how many times letter appears (frequency)
//iterate through str using for... of loop
    //if letter is not in counter obj, 
        //assign val of 1
    //else,
        //increment letter
//iterate through counter obj
    //concat key and value to newStr var
//return newStr

//strExpand("aabbccd") // "a2b2c2d1"
//strExpand("aabbccdaaz") // "a4b2c2d1z1"
//strExpand("zebraza") // "z2e1b1r1a2"
console.log(strExpand('zezae'));// 'z2e2a1'
