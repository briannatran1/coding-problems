/*A string is considered to be in title case if each word in the string is either (a) capitalised 
(that is, only the first letter of the word is in upper case) or
(b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string 
with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case 
of the minor word string is changed.*/


//declare result str
//turn title str into lowercase
//split title str into arr by word
//split minorWords into arr by word if it's not an empty str, if it's empty, it will be an empty arr
//iterate through arr using for...loop
  //if word is not included in minorWords or we are looking at the first word, 
    //capitalize the first letter
  //else if word is found in minorWords,
    //word will be lowercase
//return arr joined back into a str

function titleCase(title, minorWords) {
  if(!title){
    return '';
  }
  let lowerTitle = title.toLowerCase();
  let minorArr = (minorWords || '').toLowerCase().split(' ');
  let arr = lowerTitle.split(' ');
  for(let i = 0; i < arr.length; i++){
    if(!minorArr.includes(arr[i]) || i === 0){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    else if(minorArr.includes(arr[i])){
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join(' ');
}

/*titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'*/
