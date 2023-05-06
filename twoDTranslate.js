/*Write a method two_d_translate that takes in a 2 dimensional array and translates it into a 1 
dimensional array. You can assume that the inner arrays always have 2 elements.*/

function twoDTranslate(arr){ //arr2
    let result = [];
    for(let i = 0; i < arr.length; i++){ //iterates outer arr
        let word = arr[i][0]; //word = red, blue
        let count = arr[i][1]; //count = 1, 4
        for(let j = 0; j < count; j++){ //iterate the number/count
            result.push(word); //['red', 'blue', 'blue', 'blue', 'blue']
        }
    }
    return result;
}

//input: arr
//output: arr

//declare new arr var
//iterate using for...loop to access inner arr & index directly inside
    //declare word var => arr[i][0] = 0th index
    //declare count var => 1st index
    //iterate using for...loop => j
        //push 'count' copies of word to result arr => j < count
//return result arr

arr1 = [
    ['boot', 3],
    ['camp', 2],
    ['program', 0]
  ];

twoDTranslate(arr1); //[ 'boot', 'boot', 'boot', 'camp', 'camp' ]

arr2 = [
    ['red', 1],
    ['blue', 4]
  ];
twoDTranslate(arr2);  //[ 'red', 'blue', 'blue', 'blue', 'blue' ]
