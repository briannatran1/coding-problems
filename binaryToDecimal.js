/*Write a function, binaryToDecimal, which accepts a binary number (in the form of a string of zeros and ones) and returns the decimal value.

IMPORTANT Do not use parseInt!*/

//declare decimal var
//iterate through binary using for...loop
    //convert the char into a number
    //if bit is 1,
        //calculate value of the bit and add to decimal
//return decimal

function binaryToDecimal(binary) {
    let decimal = 0;
    for(let i = 0; i < binary.length; i++){
        let bit = Number(binary[binary.length - 1 - i]);
        if(bit === 1){
            decimal += 2 ** i;
        }
    }
    return decimal;
}
