/* Given 2 arrays of numbers of the same length. Return true if each value in arr1 has itself squared in arr2. Order doesn't matter*/

function same(arr1, arr2){
    let squared = [];
    for(let val of arr1){ 
        squared.push(val ** 2); //squared = [25, 4, 25]
    }
    let squaredCount = {};
    let arr2Count = {};
    for(let val of squared){
        //if(!(val in squaredCount)){
            //squaredCount[val] = 1;
        if(squaredCount[val] === undefined){ 
            squaredCount[val] = 1; //{25: 2, 4: 1}
        }
        else{
            squaredCount[val]++;
        }
    }
    for(let val of arr2){
        if(arr2Count[val] === undefined){
            arr2Count[val] = 1; //{4: 1, 25: 2}
        }
        else{
            arr2Count[val]++;
        }
    }
    for(let key in squaredCount){
        if(squaredCount[key] !== arr2Count[key]){ //key = 4 => 1 = 1; key = 25 => 2 = 2
            return false;
        }
        return true; //true
    }
}

//another
function same(arr1, arr2){
    let squared = [];
    for(let val of arr1){
        squared.push(val ** 2); //[25, 4, 25]
    }
    squared = squared.sort((a, b) => a - b); //[4, 25, 25]
    arr2 = arr2.sort((a, b) => a - b); //[4, 25, 25]
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] !== squared[i]){
            return false;
        }
    }
    return true;
}

//using map
function same(arr1, arr2){
    let squared = arr1.map(val => val ** 2);
    squared = squared.sort((a, b) => a - b); //[4, 25, 25]
    arr2 = arr2.sort((a, b) => a - b); //[4, 25, 25]
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] !== squared[i]){
            return false;
        }
    }
    return true;
}

//input: arrs
//output: boolean

//declare squared arr => square each val in arr1
//iterate through arr1
    //push each squared val to squared arr
//declare counter obj2
//declare counter obj2
//iterate through squared arr
    //if val does not appear in counter obj
        //assign val to 1
    //increment 
//iteraate through arr2
    //if val does not appear in counter obj2
        //assign val to 1
    //increment
//iterate through counter obj,
    //if val in counter obj1 !== val in counter obj2
        //return false
    //return true

//2nd solution => used sort => inefficient?
//declare a squared arr => square each val in arr1 
//iterate through arr1 using for...of loop
    //push square of each val to squared arr
//sort squared arr and arr2
//iterate through arr2 using for...loop
    //if val in arr2 is not the same as val in squared,
        //return false
    //else
        //return true

console.log(same([5,2,5], [4,25,25])); // true 
console.log(same([1,2,1], [4,4,1])); // false
