/*Write a function, unzip, which accepts a matrix of nRows rows and nCol columns.
It should return a new array, of numCol rows and numRows columns, which regroups elements.*/

//declare nRows var
//declare nCol var
//declare result arr var
//iterate through cols
    //declare a newRow arr var
    //iterate through rows
        //access elem at row and col index and push to newRow var
    //push newRow to result arr
//return result

function unzip(matrix) {
    let nRows = matrix.length;
    let nCol = matrix[0].length;
    let result = [];
    for(let col = 0; col < nCol; col++){
        let newRow = [];
        for(let row = 0; row < nRows; row++){
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }
    return result;
}
