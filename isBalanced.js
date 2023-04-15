/* Given a string of characters that are open parenthesis and closed parenthesis. Return true if each open parenthesis has a corresponding 
closing parenthesis. Return false if closing comes before open*/

//edge cases:
//need to check if closed > open 
//if there are no open parenthesis => false

//declare count vars for both open and closed
//iterate through str
    //if char is open,
        //increment
    //if char is closed,
        //increment
    //if closed > open,
        //return false
    //if open === 0,
        //return false
//return true

function isBalanced(str){ //'())(()'
    let countClosed = 0;
    let countOpen = 0;
    for(let char of str){
        if(char === '('){ //countOpen = 1
            countOpen++;
        }
        if(char === ')'){ //countClosed = 2
            countClosed++;
        }
        if(countClosed > countOpen){ // 2 > 1
            return false; //false
        }
    }
    return true;
}

//OR
//declare a stack arr to keep track of open parentheses
//iterate through str using for...of loop
  //if first char in str is a closed parentheses,
    //return false
  //if char is an open parentheses,
    //push to stack
  //else if char is a closed parentheses,
    //pop an open parenthesis in stack
//return true if stack is empty => all pairs are balanced

function isBalanced(str){
    let stack = [];
    if(str[0] === ')'){
        return false;
    }
    for(let char of str){
        if(char === '('){
            stack.push(char);
        }
        else if(char === ')'){
            stack.pop();
        }
    }
    return stack.length === 0;
}

//input: str
//output: boolean


console.log(isBalanced('(()())')) // true
console.log(isBalanced('())(()')) // false 4 o 4 cl
console.log(isBalanced('(((())))')) // true

console.log(isBalanced('))((')) // false

console.log(isBalanced('))')); //false
