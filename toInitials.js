/*Write a method to_initials that takes in a person's name string and returns a 
string representing their initials.*/

function toInitials(name){
    let result = [];
    let arr = name.split(' '); //['Kevin', 'Bridges']
    for(let word of arr){
        let initial = word[i][0].toUpperCase(); //K, B
        result.push(initial); //['K', 'B']
    }
    return result.join(''); //'KB'
}

//input: str
//output: str

//declare new str var
//use split to turn str into arr by word
//iterate through arr
    //push and capitalize first letter of each word to arr var
//return str by joining arr

toInitials("Kelvin Bridges"); //KB
toInitials("Mary La Grange"); //MLG
