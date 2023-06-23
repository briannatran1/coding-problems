/*Given an integer x, return true if x is a palindrome, and false otherwise.*/

//solved in 6:27

function isPalindrome(x){
    if(x < 0){ //-121 < 0
        return false; //false
    }
    let str = String(x); //'10'
    let reversed = str.split('').reverse().join(''); //[1, 0] => [0, 1] => '01'
    if(reversed === str){ //'01' !== '10'
        return true;
    }
    return false; //false
}

//input: number
//output: boolean

//edge cases
    //negative number

//if x is negative
    //return false
//declare str var => turn num to str
//declare reversed var => split str, reverse it, and join 
//if reversed is the same as str (must compare str to str)
    //return true
//return false

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false
