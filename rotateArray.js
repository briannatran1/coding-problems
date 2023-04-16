/*Write a method rotate_array that takes in an array and a number. The method should 
return the array after rotating the elements the specified number of times. 
A single rotation takes the last element of the array and moves it to the front.*/

function rotateArray(arr, num){
    for(let i = 0 ; i < num; i++){
        let last = arr.pop(); //d; c
        arr.unshift(last); //['d', 'a', 'b', 'c']; ['c', 'd', 'a', 'b']
    }
    return arr; 
}

//input: arr, num
//output: arr

//iterate through arr => i < num
    //take last elem => declare var
    //add last elem to the front
//return arr

rotateArray([ "Matt", "Danny", "Mashu", "Matthias" ], 1); // [ "Matthias", "Matt", "Danny", "Mashu" ]
rotateArray([ "a", "b", "c", "d" ], 2); // [ "c", "d", "a", "b" ]
