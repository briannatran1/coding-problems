/*Write a function, zip, which accepts an arbitrary number of arrays.
This should create an array of grouped elements, the first of which contains the first elements of the input arrays,
the second of which contains the second elements of the input arrays, and so on.*/

//find the max length between all arrs
//declare result arr var
//iterate through maxLength using for...loop
    //map each input arr at i to retrieve elem from each arr and create a group
    //push group to result
//return result

function zip(...arrs) {
    let maxLength = Math.max(...arrs.map(arr => arr.length));
    let result = [];
    for(let i = 0; i < maxLength; i++){
        let group = arrs.map(arr => arr[i]);
        result.push(group);
    }
    return result;
}
