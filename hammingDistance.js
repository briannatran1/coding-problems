/*Write a function, hammingDistance, which will accept two strings of equal length, s1 and s2.

It should calculate the Hamming distance between the strings. The distance is defined as the number of times characters differ at the same position.

The function should ignore case. If the inputs do not have the same length, the function should return NaN*/

//if strs aren't the same length,
    //return NaN
//declare distance var
//turn strs into all lowercase
//iterate through s1 using for...loop
    //if vals at same index of both loops do not match,
        //increment distance
//return distance

function hammingDistance(s1, s2) {
    if(s1.length !== s2.length){
        return NaN;
    }
    let distance = 0;
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            distance++;
        }
    }
    return distance;
}
