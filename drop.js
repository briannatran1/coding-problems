/*Write a function, drop, which accepts an array, items and optional number, numDrop. It should return a copy of items with numDrop elements
dropped from the beginning.

If the numDrop is greater than the length of items, return an empty array.
If numDrop is not provided, return copy without the first item.

Since drop returns a new array, it should not mutate the original array.*/

//dropped from beg => shift method

//if numDrop is greater than items length,
	//return empty arr
//if numDrop is undefined,
	//return copy of arr without first element
//return a copy of items dropping numDrop items from beg

function drop(items, numDrop) {
	if(numDrop > items.length){
		return [];
	}
	if(numDrop === undefined){
		return items.slice(1);
	}
	return items.slice(numDrop);
}
