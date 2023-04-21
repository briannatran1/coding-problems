/*Look at each piece separately. Compare codes and then compare dates. Check if codes are the same and if current date does not exceed expiration.*/


//if codes do not equal each other,
  //return false
//turn dates into date objects => use new Date() method
  //if current date is greater than expiration,
    //return false;
//return true

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode !== correctCode){
    return false;
  }
  let current = new Date(currentDate);
  let expiration = new Date(expirationDate);
  if(current > expiration){
    return false;
  }
  return true;
} 
