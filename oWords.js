/*Write a method o_words that takes in a sentence string and returns an array 
of the words that contain an "o".*/

function oWords(str){
    let words = [];
    let arr = str.split(' '); 
    for(let word of arr){
        if(word.includes('o')){
            words.push(word);
        }
    }
    return words;
}

//input: str
//output: arr

//declare new arr var
//split str into arr 
//loop thru arr using for...of loop
    //if word contains an 'o' => push to new arr
//return arr

oWords("How did you do that?"); //["How", "you", "do"]
