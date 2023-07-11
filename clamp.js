/*Write a function, clamp, which accepts three numbers: value, lowerBound, and upperBound.
The function should return value if it is in between the bounds.
Otherwise, the function should return lowerBound if value is less than lowerBound, or upperBound if value is greater than upperBound.*/

//if value is greater than lowerBound and less than upperBound,
    //return value
//else if value is lower than lowerBound,
    //return lowerBound
//else,
    //return upperBound

function clamp(value, lowerBound, upperBound) {
    if(value > lowerBound && value < upperBound){
        return value;
    }
    else if(value < lowerBound){
        return lowerBound;
    }
    else{
        return upperBound;
    }
}
