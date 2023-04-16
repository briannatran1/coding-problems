/*Write a method abbreviate_sentence that takes in a sentence string and returns a 
new sentence where every word longer than 4 characters has all of it's vowels removed.*/

function abbreviateSentence(str){
    let newWords = [];
    let arr = str.split(' '); //['what', 'a', 'wonderful', 'life']
    for(let word of arr){
        if(word.length > 4){ //wonderful > 4
            let newWord = abbreviateWord(word); //'wndrfl'
            newWords.push(newWord); //['wndrfl']
        }
        else{
            newWords.push(word);
        }
    }
    return newWords.join(' '); //'wndrfl'
}

function abbreviateWord(word){ //'wonderful'
    const vowels = 'aeiou';
    let noVowels = '';
    for(let char of word){
        if(!vowels.includes(char)){
            noVowels += char; //noVowels = 'wndrfl'
        }
    }
    return noVowels; //'wndrfl
}

abbreviateWord('bootcamp'); //'btcmp'

//input: str
//output: str

//HELPER function to remove vowels from each word
//declare vowels var => to access
//declare new str var
//iterate through word 
    //if char is not a vowel, add to char str
//return str var

//MAIN FUNCTION
//declare new words arr var
//split str into arr by word
//iterate through arr
    //if word > 4 chars 
        //remove vowels 
//return joined arr into str

abbreviateSentence("follow the yellow brick road"); // "fllw the yllw brck road"
abbreviateSentence("what a wonderful life"); // "what a wndrfl life"
