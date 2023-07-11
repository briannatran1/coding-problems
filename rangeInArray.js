/*Write a function, rangeInArray, which accepts nums and start and end indices. It should return the sum of values between (and including)
the start and end index.

If a start parameter is not passed in, it should default to zero. If an end parameter is not passed in, it should default to the last value
in the array. Also, if the end argument is too large, the sum should still go through the end of the array.*/

//input: arr
//output: number

//declare sum var
//if it's an empty arr,
    //return 0
//if start and end are both missing,
    //set start to 0
    //set end to last value
//else if only start is missing,
    //set start to 0
//else if only end is missing,
    //set end to last value
//adjust start so it won't be neg
//adjust end so it won't be larger than arr length
//iterate through start and end
    //add each val at the index to sum
//return sum

function rangeInArray(nums, start, end) {
    let sum = 0;
    if(nums.length === 0){
        return 0;
    }
    if(start === undefined && end === undefined){
        start = 0;
        end = nums.length - 1;
    }
    else if(start === undefined){
        start = 0;
    }
    else if(end === undefined){
        end = nums.length - 1;
    }
    start = Math.max(0, start);
    end = Math.min(nums.length - 1, end);
    for(let i = start; i <= end; i++){
        sum += nums[i];
    }
    return sum;
}
