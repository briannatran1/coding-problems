/*Write a method pyramid_sum that takes in an array of numbers representing the base of a 
pyramid. The function should return a 2D array representing a complete pyramid with the 
given base. To construct a level of the pyramid, we take the sum of adjacent elements 
of the level below.*/

function pyramidSum(base){
    let pyramid = [base]; //[[1, 4, 6]]
    while(pyramid.length < base.length){
        let previous = pyramid[0] // [1, 4, 6]
        let nextLevel = adjacentSums(previous); //[5, 10]
        pyramid.unshift(nextLevel); //[[5, 10], [1, 4, 6]]
    }
    return pyramid;
}

function adjacentSums(arr){ //[1, 4, 6]
    let sums = [];
    for(let i = 0; i < arr.length - 1; i++){
        let current = arr[i]; //arr[0] = 1
        let next = arr[i + 1]; //arr [1] = 4
        let combined = current + next; //5
        sums.push(combined); //[5, 10]
    }
    return sums;
}

//input: arr
//output: arr

//HELPER
//find adjacent sum of each level => helper function
    //i < arr.length - 1 => not last position of arr, so 2nd last
//declare sums arr var to store sub arr
//loop through arr using for...loop
    //declare current level var
    //declare next level var => add 1
    //declare combined var => current + next
    //push adjacent sum to sums arr
//return sums arr

//declare pyramid arr var
//use a while loop as long as pyramid.length < base of pyramid length(starting)
    //declare previous level var => first arr => pyramid[0]
    //declare next level var using helper function 
    //add result to beginning of arr => unshift
//return pyramid


pyramidSum([1, 4, 6]); //[[15], [5, 10], [1, 4, 6]]
pyramidSum([3, 7, 2, 11]); //[[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
