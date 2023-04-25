//Go through each number in array. Find max product of adjacent numbers and return it.

//declare product var and initialize to -Infinity
//iterate through arr using for...loop
  //if product of current and next elem are greater than the product,
    //update product value
//return product

function adjacentElementsProduct(arr) {
  let product = -Infinity;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] * arr[i + 1] > product){
      product = arr[i] * arr[i + 1];
    }
  }
  return product;
}
