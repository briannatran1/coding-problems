/*Write a function, head, which accepts an array, items. It should return the first item (or undefined if the array is empty).*/

//if arr is empty,
	//return undefined
//return first item in arr

function head(items) {
	if(items.length === 0){
		return undefined;
	}
	return items[0];
}
