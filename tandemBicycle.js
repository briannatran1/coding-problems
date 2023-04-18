//tandemSpeed = max(speedA, speedB)
//pair red shirt with blue shirt
//fastest = true => max; else, min

/*Given 2 lists of numbers, if fastest var is true, we want to pair the high numbers with the low nums
to get the maximum sum. If fastest is false, we want to pair the lower numbers together and vice versa*/

/*After we pair numbers together, we want to look through the pairs and take the highest number and add them
to a variable => total speed*/

//declare totalSpeed var => solution
//sort redShirt in descending order
//if fastest is true,
    //sort blueShirt in descending order
//else,
    //sort blueShirt in ascending order
//iterate through redShirt arr
    //find max value of each arr and add it to totalSpeed var
//return totalSpeed

function tandemBicycle(redShirt, blueShirt, fastest){
    let totalSpeed = 0;
    redShirt.sort((a, b) => a - b); //[9, 5, 5, 3, 2]
    if(fastest){ //true
        blueShirt.sort((a, b) => b - a); //[1, 2, 3, 6, 7]
    }
    else{
        blueShirt.sort((a, b) => a - b);
    }
    for(let i = 0; i < redShirt.length; i++){
        totalSpeed += Math.max(redShirt[i], blueShirt[i]); //Math.max(9, 1) -> 9
    }
    return totalSpeed; //9 + 5 + 5 + 6 + 7 = 19 + 13 = 32
}
