/*Write a function, padEnd, which accepts a string, phrase, and a number, minLength. It should return phrase, padded on the right side if
it’s shorter than minLength.

By default, it will pad the string with whitespace. However, you can also provide a third argument to the function which will specify how
it should pad the output string.

Padding characters are truncated if there’s not enough padding, and are repeated if there’s too much padding.

If the minLength is less than phrase length, no padding or truncation occurs; instead, the original string is simply returned.*/

//if minLength is shorter than phrase length,
	//return phrase
//find how much padding is needed by subtracting minLength and phrase length
//declare padding var -> repeat paddingChar by paddingLength times
//return phrase concat with padding and make sure it matches minLength

function padEnd(phrase, minLength, paddingChar = ' ') { //'abc', 7, 'xyz'
	if(minLength < phrase.length){
		return phrase;
	}
	let paddingLength = minLength - phrase.length; //4
	let padding = paddingChar.repeat(paddingLength); //'xyzxyzxyzxyz'
	return phrase + padding.slice(0, paddingLength); //'abcxyzx'
}
