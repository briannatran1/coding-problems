/*Write a method array_translate that takes in an array whose elements alternate between words 
and numbers. The method should return a string where each word is repeated the number of times 
that immediately follows in the array.*/

function arrayTranslate(arr){
    let str = '';
    for(let i = 0; i < arr.length; i += 2){
        let word = arr[i]; //arr[0] = red, arr[2] = blue
        let count = arr[i + 1]; //arr[1] = 3, arr[3] = 1
        for(let j = 0; j < count; j++){
            str += word; 
        }
    }
    return str; //'redredredblue'
}

//input: arr
//output: str

//declare str var
//iterate through arr => want to look at adjacent elems (pairs)
    //declare word var to get word
    //declare count
    //iterate to get number of times word appears
        //concat word to str var
//return str

arrayTranslate(["Cat", 2, "Dog", 3, "Mouse", 1]); // "CatCatDogDogDogMouse"
arrayTranslate(["red", 3, "blue", 1]); // "redredredblue"
