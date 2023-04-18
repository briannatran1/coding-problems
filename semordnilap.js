//Given an array, return palindromes as pairs

/*Compare each word with all the other words, and see if there's a word that the reverse of it*/

//2 pointer technnique => used to search for PAIRS in arr

//declare palindromes arr 
//iterate through words arr using nested loop
    //

function semordnilap(words){
    let palindromes = [];
    for(let i = 0; i < words.length - 1; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[i] === words[j].split('').reverse().join('')){ 
                palindromes.push([words[i], words[j]]); //[['diaper', 'repaid']]
            }
        }
    }
    return palindromes; //[['diaper', 'repaid'], ['abc', 'cba']]
}
