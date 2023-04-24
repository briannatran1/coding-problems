/*Write a method format_name that takes in a name string and returns the name 
properly capitalized.*/

function formatName(name){
    let result = [];
    let lowerName = name.toLowerCase(); //'chase wilson'
    let arr = lowerName.split(' '); //['chase', 'wilson']
    for(let word of arr){
        let newName = word[i][0].toUpperCase() + word.slice(i + 1, word.length); //C + hase
        result.push(newName); //['Chase']
    }
    return result.join(' '); //'Chase'
}

//input: str
//output: str

//declare new name arr var
//change str to all lowercase letters
//split name into arr
//iterate through arr
    //capitalize first letter of each word + add remaining letters after
    // => slice (start, end) => does not incl end
//return joined arr into str

formatName("chase WILSON"); // "Chase Wilson"
formatName("brian CrAwFoRd scoTT"); // "Brian Crawford Scott"
