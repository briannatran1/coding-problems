/*Write a function, inRange, which takes in three numbers: n, start, and end. It should return true/false if n is between start and up to,
but not including, end.

If end is not specified, it’s set to start with start then set to 0.

If start is greater than end the params are swapped.*/

//if end is undefined,
	//set end to start
	//set start to 0
//if start is greater than end,
	//set start to end
	//set end to start
//if n is between start and up to end,
	//return true

function inRange(n, start, end) { // n = 1.2, start = 2
	if(end === undefined){
		end = start; // end = 2
		start = 0; // start = 0
	}
	if(start > end){
		[start, end] = [end, start];
	}
	return n >= start && n < end; //1.2 >= 0 && 1.2 < 2
}
