/*For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input: A string (string).

Output: A string (string).

Examples:

assert.strictEqual(
    correctSentence("greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends."),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("greetings, friends."),
    "Greetings, friends."
);*/

//trim leading and trailing spaces
//capitalize the first letter
//add period at end if necessary
//return sentence

function correctSentence(text){
    text = text.trim();
    text = text.charAt(0).toUpperCase() + text.slice(1);
    if(!text.endsWith('.')){
        text += '.';
    }
    return text;
}
