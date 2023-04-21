// SETUP DO NOT MODIFY
class Person {
    constructor(name, friends=[]) {
        this.name = name;
        this.friends = friends;
    }
    addFriend(person) {
        this.friends.push(person)
    }
  }
  const Ray = new Person('Ray');
  const John = new Person('John');
  const Alex = new Person('Alex');
  const Kevin = new Person('Kevin');
  const Enzo = new Person('Enzo');
  const Bri = new Person('Bri');
  const Arvin = new Person('Arvin');
  const Stephen = new Person('Stephen');
  const Jenny = new Person('Jenny');
  Ray.addFriend(Arvin);
  Ray.addFriend(Kevin);
  Ray.addFriend(John);
  John.addFriend(Alex);
  John.addFriend(Enzo);
  Enzo.addFriend(Jenny);
  Kevin.addFriend(Bri);
  Arvin.addFriend(Stephen);
  const people = [
    Ray,
    John,
    Alex,
    Kevin,
    Enzo,
    Bri,
    Arvin,
    Stephen,
    Jenny,
  ];
  //SETUP DO NOT MODIFY END

/** Part 1
* A hacker hacked everyones instagram and unfollowed people, however
* the hacked still follows friends, while friends do not follow hacked
* 
* Write a function that accepts a person, hacked <class Person>, and 
* checks if each person on hacked's friends list follows back hacked.
* If hacked's friend is not followed back, use the .addFriend() method
* to add hacked to the friends list.
* 
* Ex:
*  Ray -> Arvin
*      -> Kevin
*      -> John
* 
* 
*  thanos(Ray) 
* // => console.log(Arvin) => Arvin -> Ray
*                                   -> Stephen
* // => console.log(Kevin) => Kevin -> Bri
*                                   -> Ray
* // => console.log(John) => John -> Alex
*                                 -> Ray
*/

/*Check if person follows back hacked person. If not, have person follow hacked by using .addFriend()*/

//need access to hacked friend's arr => hackedObj.friends
//we need to compare hacked friends to person in friend's friends arr
//if hackedObj.name does not exist in that person's friend's arr,
  //push hackedObj.name to friend's arr
//return corresponding person's friend's arr

function hacked(hackedObj){
    let hackedFriends = hackedObj.friends; //[Arvin, Kevin, John] => arr of objs
    for(let obj of hackedFriends){ 
        let unHackedFriends = obj.friends; //[Stephen]
        let isFriends = false;
        for(let friends of unHackedFriends){
            if(friends.name === hackedObj.name){
                isFriends = true;
                continue;
            }
        }
        if(!isFriends){
            obj.addFriend(hackedObj);
        }
    }
}
