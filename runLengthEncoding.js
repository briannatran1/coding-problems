/*Given a non-empty string, we are asked to write a function that is going to run-length-encode the input string and return the encoded string. 
Run-length encoding refers to replacing repetitive, consecutive data by a count and one copy of a repeated data. For instance, AAABB 
will be encoded as 3A2B. If a sequence contains more than 9 consecutive, identical characters, we first encode 9 characters, 
then the remaining ones. For instance, AAAAAAAAAA (10 As) will be encode as 9A1A.*/

/*Need to count how many instances a letter occurs. If it occcurs more than 9 times, start a new count. Return string */

//declare result arr => stores encoded chars
//initialize start to 0 => keeps track of starting index of a sequence
//iterate through str using for... loop
    //if we are dealing with the last sequence, if current index is not equal to char at start, or if we have processed 9 chars,
        //push count and char to result arr
        //assign start to current index
//return result joined into str


function runLengthEncoding(str){
    let result = [];
    let start = 0;
    for(let i = 1; i <= str.length; i++){
        if(i === str.length || str[start] !== str[i + 1] || i - start === 9){
           result.push(i - start);
           result.push(str[start]);
           start = i;
        }
    }
    return result.join('');
}

//OR
function runLengthEncoding(string) {
    let encodedChars = [];
    let currRunLength = 1;
    for (let i = 1; i <= string.length; i++) {
        let prevChar = string[i - 1];
        if (i === string.length || string[i] !== prevChar || currRunLength === 9) {
            encodedChars.push(String(currRunLength));
            encodedChars.push(prevChar);
            currRunLength = 0;
        }
        currRunLength++;
    }
    return encodedChars.join('');
}


//'AAABB' => '3A2B'
//'AAAAAAAAAA' => '9A1A'
