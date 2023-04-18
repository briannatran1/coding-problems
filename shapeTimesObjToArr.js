/*Often times as a developer you are given API data that doesn't necessarily conform to a shape that is easily consumable. You have to massage the data in some way so that you can work with it more easily in the environment you need it. In this code kata you will take an object and turn it into an iterable array. The shape of the api object will be like so:

const timesObject = {
  monday   : [{ open: '07:00', close: '17:00' }],
  tuesday  : [{ open: '07:00', close: '17:00' }],
  wednesday: [{ open: '07:00', close: '17:00' }],
  thursday : [{ open: '07:00', close: '17:00' }],
  friday   : [{ open: '07:00', close: '17:00' }],
  saturday : [],
  sunday   : [],
}
What this data shape is telling us is that the open times for this store are Monday thru Friday from 7am to 5pm. But this may not be so easily consumable on the front end. It would be easier if this was an array object. Your mission, if you choose to accept it, is to massage this data into a shape like so:

const timesArray = [
  { 
    open : '07:00',
    close: '17:00', 
    days : ['monday','tuesday', 'wednesday', thursday', 'friday'],
  }
]
Now create a function called shapeTimesObjectIntoIterableArray that takes an hours object and returns an array of objects.*/

//declare result arr which will store the obj output
//iterate through given timesObj
  //if day's arr is empty,
    //skip this day and move on => continue
  //if day's arr is not empty,
    //get opening and closing time for the day 
    //declare found var to see if there is a matching obj in result
  //iterate over result arr to check if current open and close times have been added
    //if they have been added, there's already an obj in result arr so,
      //push day to matching object key
      //set found to true 
      //break out of loop
  //if open and close times are not found, 
    //create a new obj with times from earlier as well as an arr with day
//return obj in arr

function shapeTimesObjectIntoIterableArray(timesObject) {
  let result = [];
  for (let day in timesObject) {
    if (timesObject[day].length === 0) {
        continue;
    }
    let open = timesObject[day][0].open; //7
    let close = timesObject[day][0].close; //17
    let found = false;
    for (let i = 0; i < result.length; i++) { //monday; tuesday
        if (result[i].open === open && result[i].close === close) { //obj has open and close times
            result[i].days.push(day); //[{open: 7, close: 17, days: ['monday', 'tuesday']}]
            found = true; 
            break;
        }
    }
    if (!found) {
        result.push({ open: open, close: close, days: [day] }); //[{open: 7, close: 17, days: ['monday']}]
    }
  }
  return result;
}
