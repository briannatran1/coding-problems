/**
 * Create a function called findFavorites that takes in the nested data structure and a food 
 * item as its parameters, and returns an array of the names of all friends that have the 
 * given food item in their list of favorite foods.
 **/

//parameters: friends, foodItem
//declare an array variable
//loop arr
  //look for 'favoriteFoods' in friend 
  //if food is included in key,
    //push the value of name to array variable
//return array variable


//THOTS
//look into the nested structure. find favoriteFoods title, and look at answer to see if it contains the listed food item that is being searched for

//EDGE CASES
// 1. what if nobody has foodItem in favoriteFoods? -> return empty array
// 2. what if favoriteFoods is empty? -> skip person
// 3. what if friends was empty? -> return empty array

function findFavorites(friends, foodItem){ //pizza
  let arr = [];
  for(let friend of friends){
    if(friend.favoriteFoods.includes(foodItem)){ //pizza included in the key?
      arr.push(friend.name); //[Alice, Charlie]
    }
  }
  return arr;
}

//input: arr
//output: arr

const friends = [
    {
        name: 'Alice',
        favoriteFoods: ['pizza', 'pasta']
    },
    {
        name: 'Bob',
        favoriteFoods: ['sushi', 'ramen']
    },
    {
        name: 'Charlie',
        favoriteFoods: ['pizza', 'burger']
    },
    {
        name: 'David',
        favoriteFoods: ['steak', 'sushi']
    },
];

console.log(findFavorites(friends, 'pizza')) // prints ['Alice', 'Charlie']
