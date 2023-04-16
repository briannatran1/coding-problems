/*Write a function that takes a string of braces, and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.*/

//create stack arr to keep track of open braces
//create open braces arr
//create closed braces arr
//iterate through braces using for...loop
  //if the current element is an open brace,
    //push to stack
  //else if current elem is a closed brace,
    //check if it matches the most recent open brace in stack
    //if stack is empty, or or the open and closed braces don't match,
      //return false
//return if stack is empty => all matching pairs

function validBraces(braces){
  let stack = [];
  let open = ['(', '[', '{'];
  let closed = [')', ']', '}'];
  for(let i = 0; i < braces.length; i++){
    if(open.includes(braces[i])){
      stack.push(braces[i]);
    }
    else if(closed.includes(braces[i])){
      let matchingOpen = open[closed.indexOf(braces[i])];
      if(stack.length === 0 || stack.pop() !== matchingOpen){
        return false;
      }
    }
  }
  return stack.length === 0;
}

/*"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False*/
