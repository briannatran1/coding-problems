/*Write a method first_in_array that takes in an array and two elements, the method 
should return the element that appears earlier in the array.*/

function firstInArray(arr, el1, el2){
    let index1 = arr.indexOf(el1); //arr[3] = d
    let index2 = arr.indexOf(el2); //arr[1] = b
    if(index1 < index2){ 3 > 1
        return el1;
    }
    return el2; //return el2 = b
}


//input: arr, strings
//output: str

//find index of el1 
//find index of el2
//compare both indexes => if index of el1 < el2,
    //return el1
//return el2

firstInArray(["a", "b", "c", "d"], "d", "b"); //'b'
firstInArray(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse"); //'dog'
