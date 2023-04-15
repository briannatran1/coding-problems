/*Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves
you can constitute from the gloves you have in your drawer. Given an array describing the color of each glove, 
return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.*/

function pairOfGloves(arr){
    let totalPairs = 0;
    let count = {};
    for(let color of arr){
        if(count[color] === undefined){
            count[color] = 1; //{red: 2, green: 1, blue: 2}
        }
        else{
            count[color]++;
        }
    }
    for(let key in count){
        let pairs = Math.floor(count[key] / 2); //red => Math.flor(2/2) => 1; green => 0; blue => 1
        totalPairs += pairs; //1 + 0 + 1 = 2
    }
    return totalPairs; //2
}   

//input: arr
//output: number

//declare totalPairs
//declare counter obj => keeps track of how many gloves of each color
//iterate through arr
    //if color is not in obj,
        //assign val of 1
    //else
        //increment
//iterate through counter obj
    //use Math.floor to get pairs of each color
    //add each pair to totalPairs var
//return totalPairs

console.log(pairOfGloves(["red", "green", "red", "blue", "blue"])) // 2 (1 red pair + 1 blue pair)
console.log(pairOfGloves(["red", "red", "red", "red", "red", "red"])) //3 (3 red pairs)
