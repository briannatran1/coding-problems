/*Write a function, createMatrix, which takes in two whole numbers, numCols and numRows, and creates a two-dimensional array with that many
columns and rows. All the values inside the array should be 0.*/

//declare matrix arr
//iterate over number of rows using for...loop
    //create a new row array that is the length of numCols filled with 0s
    //push row to matrix
//return matrix

function createMatrix(numCols, numRows) { //1, 2
    let matrix = [];
    for(let i = 0; i < numRows; i++){
        let row = Array(numCols).fill(0); //i = 0 -> [0], i = 1 -> [0]
        matrix.push(row); // [[0], [0]]
    }
    return matrix; //[[0], [0]]
}
