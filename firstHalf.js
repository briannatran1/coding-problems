/*Write a method first_half(array) that takes in an array and returns a new array 
containing the first half of the elements in the array. If there is an odd number 
of elements, return the first half including the middle element.*/

function firstHalf(arr){
    let result = [];
    for(let i = 0; i < arr.length / 2.0; i++){ //i < 5/2.0 => 2.5
        result.push(arr[i]);
    }
    return result;
}

//input: arr
//output: arr

//declare new arr var
//iterate using for...loop => i must stop halfway if even and incl middle if odd
    //i < arr.length / 2.0 => includes half of a number
    //push val to result arr until we hit middle
//return result arr

firstHalf(["Brian", "Abby", "David", "Ommi"]); // ["Brian", "Abby"]
firstHalf(["a", "b", "c", "d", "e"]); // ["a", "b", "c"]
