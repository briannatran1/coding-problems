/*The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.*/

//split str into arr by word
//use map to iterate through each word and return first letter of word to arr
//return joined arr into a str

function nameInitials(input){
  let arr = input.split (' ');
  let initials = arr.map(word => word[0]);
  return initials.join('');
}
