/*Returns today’s date and time as a JS Date object.*/
function getToday() {
    return new Date();
}

/*Returns true/false if the given Date object is a weekend day (Saturday or Sunday).*/
function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

/*Returns the string name of the month for the given Date object.*/

//create month arr
//find month number
//return elem at monthNum index in arr

function getMonthName(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNum = date.getMonth();
    return months[monthNum];
}
