/*Write a method most_vowels that takes in a sentence string and returns the 
word of the sentence that contains the most vowels.*/

//HELPER FUNCTION
function vowelCount(word){ //'wonderful'
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for(let char of word){
        if(vowels.includes(char)){ //wonderful => 3 vowels
            count++; //count = 3
        }
    }
    return count; //3
}

vowelCount('wonderful'); //3

function mostVowels(str){
    let counts = {}
    let words = str.split(' '); //['what', 'a', 'wonderful', 'life']
    let maxVowelCount = 0;
    let mostVowelWord = '';
    for(let i = 0; i < words.length; i++){
        let word = words[i]; // words[0] => word = 'what'
        let countVowel = vowelCount(word); //what => 1
        counts[word] = countVowel; //{'what': 1}
        if(countVowel > maxVowelCount){ //1 > 0
            maxVowelCount = countVowel; //maxVowelCount = 1
            mostVowelWord = word; //mostVowelWord = 'what'
        }
    }
    return mostVowelWord; //'wonderful'
}

//OR
function mostVowels(str){
    let counts = {}
    let words = str.split(' '); //['what', 'a', 'wonderful', 'life']
    words.map(word => counts[word] = vowelCount(word)); //{what: 1, a:1, wonderful: 3, life: 2}
    let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]); //[[wonderful: 3], [life: 2], [what: 1], [a: 1]]
    return sorted[0][0]; //wonderful
}

//sort((a, b) => b[1] - a[1]) => [1] (1st index) sorts the values of the object

//input: str
//output: str

//declare vowels variable => need access so we can search
//declare count var => stores count of vowels
//loop through char of each word
//if vowels is included in the char, increment count
//return count

//declare counts obj to store number of vowels in each word
//split str into arr by words
//declare maxVowelCount var and mostVowel word var
//iterate over each word
    /*for each word, run vowelCount function to find number of vowels in that word => result is stored in counts obj w/
    the word as a key*/
    //if number of vowels in current word > maxVowelCount, update value
        //assign mostVowelWord to word w/ highest count

mostVowels('what a wonderful life'); //'wonderful'
