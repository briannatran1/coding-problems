/*Write a function, sumUpDiagonals, which accepts an n x n array of arrays and sums the two main diagonals in the
array: the one from the upper left to the lower right, and the one from the upper right to the lower left.*/

//declare sum1 var => upper left to lower right
//declare sum2 var => upper right to lower left
//iterate through matrix using for...loop
    //
//return the sum of both sum vars

function sumUpDiagonals(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < matrix.length; i++){
        sum1 += matrix[i][i]; //matrix[0][0] = 1, matrix[1][1] = 4
        sum2 += matrix[i][matrix.length - 1 - i]; //matrix[0][1] = 2, matrix[1][0] = 3
    }
    return sum1 + sum2; // 1 + 4 + 2 + 3 = 10
}

const matrix = [
    [1, 2],
    [3, 4],
  ];
sumUpDiagonals(matrix);  // 10
