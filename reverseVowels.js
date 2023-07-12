/*Write a function, reverseVowels, which accepts a string and reverses the vowels in the string.*/

//declare vowels var
//split str into arr
//initalize 2 pointers
//enter a while loop for when left is less than right
    //if there is a vowel at the left index and right index,
        //swap places
        //increment left
        //decrement right
    //else if there is only a vowel at the left index,
        //decrement right
    //else,
        //increment left
//return arr joined back into str

function reverseVowels(str) {
    const vowels = 'aeiouAEIOU';
    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        else if(vowels.includes(arr[left])){
            right--;
        }
        else{
            left++;
        }
    }
    return arr.join('');
}
