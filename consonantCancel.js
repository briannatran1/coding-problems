/*Write a method consonant_cancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.*/

function consonantCancel(str){
    let arr = str.split(' '); //['down', 'the', 'rabbit', 'hole']
    let newWords = arr.map(word => vowelCheck(word)); //['own', 'e', 'abbit', 'ole']
    return newWords.join(' '); //'own e abbit ole'
}

function vowelCheck(word){ //'down'
    const vowels = 'aeiou';
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){ //word[1] = o
            return word.slice(i); //'own'
            break;
        }
    }
    return word; //'own'
}

vowelCheck('down'); //'own'

//input: str
//output: str

//helper function => looks at each word and makes sure word starts with vowel
//declare vowels var
//iterate through word
    //if word does not begin with a vowel,
        //remove it and move on to the next char
        //when a vowel is encountered, return word starting at that position => slice
        //break out of loop when vowel is found because word begins with vowel now
//return word

//main function
//split str into arr by word
//use map and implement helper function for each word to remove leading consonants => declare newWords var
//return newWords arr joined together to form a str

consonantCancel("down the rabbit hole"); // "own e abbit ole"
