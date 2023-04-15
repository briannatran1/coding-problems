/*Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' 
comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". 
Note: for this kata y isn't considered a vowel.*/

function removesVowels(word){
    let noVowels = '';
    const vowels = 'aeiouAEIOU';
    for(let char of word){
        if(!vowels.includes(char)){
            noVowels += char;
        }
    }
    return noVowels;
}

// removesVowels('This'); //'Ths'

function disemvowelTrolls(str){
    let arr = str.split(' ');
    let newArr = arr.map(word => removesVowels(word));
    return newArr.join(' ');
}

//input: str
//output: str

//HELPER FUNCTION => accepts a word
//declare noVowels str var
//declare vowels var (including caps)
//iterate through word by using a for...loop
    //if char is not a vowel,
        //add to noVowels str
//return noVowels

//MAIN FUNCTION
//split str into arr by word
//use map to apply helper function to every word
//return joined arr into a str

//RMBR TO DECLARE A NEW VAR WHEN USING MAP!!!

console.log(disemvowelTrolls("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
