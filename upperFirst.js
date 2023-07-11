/*Write a function, upperFirst, which take a string. It returns a string which converts the first character to upper case.*/

//if str is empty,
    //return an empty str
//change first char of str to upper case and add the remain str to the end

function upperFirst(str) {
    if(str.length === 0){
        return '';
    }
    return str[0].toUpperCase() + str.slice(1);
}
