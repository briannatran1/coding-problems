/*1st char = a number (skip digit); indicates how many chars we will skip over. char after skip digit will be added to 
an output str that we will return. continue adding chars until we reach another skip number*/

/*Given a string that starts with a number, skip over that many characters. After skipping, add character to a new string. Continue
adding characters until we reach another skip number*/

//If we encounter a number, we will be skipping over that many chars in str, after skipping, add character to a new string. 

//declare result str
//iterate through string using for...loop
    //if char is not NaN and can be converted into a number,
        //update index to index after skipping current and number of chars
        //add new index to result str
//return str

function secretCode(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(!isNaN(Number(str[i]))){
            i += Number(str[i]) + 1; //i = 2 + 1 = 3
            result += str[i]; //'hi'
        }
    }
    return result;
}

console.log(secretCode('2abh0i17!')); //'hi!'
