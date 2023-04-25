/*Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.*/

//go through str,
  //if char has 2 adjacent letters that are the same,
    //return true
//return false

function stepThroughWith(str) {
  for(let i = 0; i < str.length - 1; i++){
    if(str[i] === str[i + 1]){
      return true;
    }
  }
  return false;
}
