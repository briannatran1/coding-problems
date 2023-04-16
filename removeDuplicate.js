/*Write a function that accepts an arr of numbers. Return a new array with all duplicates removed*/


//declare new arr variable
//loop through arr using for... of loop
//if new arr does not contain the val, push to arr
//return new arr

//[1,2,3,2,1] -> [1,2,3]

function removeDuplicate(arr){
    let noDupes = [];
    for(let val of arr){
        if(!noDupes.includes(val)){ //1 2 3, 2
            noDupes.push(val); //[1, 2, 3]
        }
    }
    return noDupes; //[1,2,3]
}
