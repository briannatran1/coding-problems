/*Write a function called solution that takes in a number and returns an array with the length equal to the input number.

Every element in the array must numbered with the correct index: 0,1,2,3,4...

solution(5) // returns [0,1,2,3,4]
solution(3) // returns [0,1,2]*/

//declare new arr
//iterate through length using for...loop
  //push index to arr 
//return new arr

function arrayGenerator(length){
	let arr = [];
	for(let i = 0; i < length; i++){
		arr.push(i);
	}
	return arr;
}
