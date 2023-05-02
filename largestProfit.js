/*Given an arr of numbers, price of items = [10, 15, 3, 7, 11, 0].  Return a number which represents the max profit by buying at any 
number and selling at any number. Must buy before selling. */ 

/*Look through the arr and find the max difference of each number. Substract each number from current val if the number is lower 
than val to find profit */

//[10, 15, 3, 7, 11, 0] => 9
//[2, 1, 0] => 0

//declare largestProfit = 0
//declare profit 
//iterate through arr using nested for...loop
    //if current val at index is less than another val in arr,
        //update profit to be the difference between those 2 numbers => use 
    //else,
        //check if profit > largestProfit,
            //update value of largestProfit
            //reset profit back to zero
//returnlargestProfit

function price(arr){ //[10, 15, 3, 7, 11, 0]
    let largestProfit = 0;
    let profit = 0;
    for(let i = 0; i < arr.length - 1; i++){  //arr[0] //arr[2]
        for(let j = i + 1; j < arr.length; j++){ //arr[1] //arr[4]
            if(arr[i] < arr[j]){ //10 < 15
                profit = Math.abs(arr[i] - arr[j]); //5 //3 - 11 => 9
            }
            else{
                if(profit > largestProfit){ //5 > 9 > 5
                    largestProfit = profit; //5 ; 9
                    profit = 0;
                }
            }
        }
    }
    return largestProfit //9
}
