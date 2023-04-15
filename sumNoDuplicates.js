/*Write a function that sums a list, but ignores any duplicate items in the list.*/

function sumNoDuplicates(arr){
    let sum = 0;
    let noDupes = [];
    let counter = {};
    for(let val of arr){
        if(counter[val] === undefined){
            counter[val] = 1; //{3: 2, 4: 1, 6: 1}
        }
        else{
            counter[val]++;
        }
    }
    for(let key in counter){
        if(counter[key] === 1){
            noDupes.push(Number(key)); //[4, 6]
        }
    }
    for(let val of noDupes){
        sum += val; //sum = 4 + 6 = 10
    }
    return sum; //10
}

//input: arr
//output: number

//declare a sum var
//declare noDupes arr
//declare a counter obj
//iterate through arr
    //if val is not in counter,
        //assign val to 1
    //else
        //increment
//iterate through counter obj
    //if value === 1
        //push key to arr => convert to number since key is a str
//iterate through noDupes arr
    //add val to sum var
//return sum

console.log(sumNoDuplicates([3,4,3,6])); //10
