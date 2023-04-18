/*Write a method reverse_words that takes in a sentence string and returns the 
sentence with the order of the characters in each word reversed. Note that we need 
to reverse the order of characters in the words, do not reverse the order of words 
in the sentence.*/

function reverseWords(str){ //'keep coding'
    let newArr = [];
    let arr = str.split(' '); //['keep', 'coding']
    for(let i = 0; i < arr.length; i++){
        let newWord = wordReversal(arr[i]); //'peek', 'gnidoc'
        newArr.push(newWord); //['peek', 'gnidoc']
    }
    return newArr.join(' '); //'peek gnidoc'
}

function wordReversal(word){ //'coding'
    let reversed = word.split('').reverse().join(''); //[c, o, d, i, n, g] => [g,n,i,d,o,c] => 'gnidoc'
    return reversed; //'gnidoc'
}

wordReversal('coding'); //'gnidoc'

//input: str
//output: str

//we can use a helper function to reverse every word
//split word into arr by chars, reverse chars, and join back into str

//declare new arr var
//use split to turn str into arr by word
//iterate using for...loop
    //declare newWord var and apply helper function to each word
    //push newWord to new arr var
//return new arr joined to form a str

reverseWords('keep coding'); //'peek gnidoc'
reverseWords('simplicity is prerequisite for reliability'); //'yticilpmis si etisiuqererp rof ytilibailer'
