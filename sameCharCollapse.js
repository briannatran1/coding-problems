// Write a function same_char_collapse that takes in a string and returns a 
// collapsed version of the string. To collapse the string, we repeatedly delete 2 
// adjacent characters that are the same until there are no such adjacent characters. 
// If there are multiple pairs that can be collapsed, delete the leftmost pair. 
// For example, we take the following steps to collapse 
// "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy

//declare a collapsible var to true until we can't collapse anymore
//use a while loop until 'collapsible' is false => ie. no longer collapsible
    //set collapsible to false
    //splits str into an arr of chars
    //iterate arr using indexes
        //if adjacent chars are the same, 
            //set index to empty strings (same as deleting both chars)
            //assign collapsible = true
            //break out of loop after deleting 2 chars
    //assign str to joined arr
//return str

function sameCharCollapse(str){ //'zzzxaaxy'
    let collapsible = true; //represents if there are still consecutive repeating chars in the str that can be collapsed
    while(collapsible){
        collapsible = false; //no more consecutive chars

        let arr = str.split(''); //['z', 'z', 'z', 'x', 'a', 'a', 'x', 'y']
        for(let i = 0; i < arr.length; i++){ //i = 0, 1 -> z, z
            if(arr[i] === arr[i + 1]){ // z === z
                arr[i] = ''; 
                arr[i + 1] = ''; //=> '[z, x, a, a, x, y]'
                collapsible = true; //indicates that there are still chars that can be collapsed
                break; //stops iterating after deleting 2 chars
            }
        }
        str = arr.join(''); //'zy'; doesn't need keyword let bc it is the same as parameter passed
    }
    return str; //'zy'
}

//input: str
//output: str

//2ND SOLUTION -> beats time limit 

/**
 * 
 * @param {*} str 
 * @returns 
 * 
 * create a stack arr to keep track of 
 * create an empty stack to store non-duplicate letters
 * iterate through str using for...loop
 * if stack isn't empty and the current value is the last letter of stack,
 * remove that letter from stack (since it's a dupe)
 * else, it's not a dupe so add letter to stack
 * return stack joined into a str
 */

function sameCharCollapse(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(stack.length > 0 && stack[stack.length - 1] === str[i]){
            stack.pop();
        }
        else{
            stack.push(str[i]);
        }
    }
    return stack.join('');
}


sameCharCollapse("uqrssrqvtt"); //'uv'
sameCharCollapse("zzzxaaxy"); //'zy'
