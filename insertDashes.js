//Go through number and see if current number and adjacent number are odds. If they are, add a dash between them. 

//declare result var that will hold final str
//turn num into str 
//iterate through str using for...loop
  //if current num and next num are odd, and we are not at the last number
    //add current num + dash to result str
  //else,
    //add num
//return result 

function insertDash(num) {
  let result = '';
  let str = num.toString();
  for(let i = 0; i < str.length; i++){
    if(Number(str[i]) % 2 !== 0 && Number(str[i + 1]) % 2 !== 0 && i !== str.length - 1){
      result += str[i] + '-';
    }
    else{
      result += str[i];
    }
  }
  return result;
}
