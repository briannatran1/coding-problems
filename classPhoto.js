/*The class picture will have 2 rows of students. Students must be in same colored shirt in one row. Taller
students will be in the back and front row must be shorter than them.*/

/*Given 2 lists of heights with the same length determine if above guidelines are possible to take a photo*/

//We want to find what color shirt has the shortest student. 

//sort both arrs in ascending order
//declare redShirt front row if they have the shortest student 
//iterate through redShirt using for...loop
    //if redShirts are in front and height of red is greater than height of blue,
        //return false
    //if red shirts are not in the front and red student is shorter than blue student
        //return false
//return true

function classPhoto(redShirt, blueShirt){
    redShirt.sort((a, b) => b - a); //[1, 3, 4, 5, 8]
    blueShirt.sort((a, b) => b - a); //[2, 4, 5, 6, 9]
    let redFrontRow = redShirt[0] < blueShirt[0]; //1 < 2
    for(let i = 0; i < redShirt.length; i++){
        if(redFrontRow && redShirt[i] >= blueShirt[i]){
            return false;
        }
        if(!redFrontRow && redShirt[i] <= blueShirt[i]){
            return false;
        }
    }
    return true; //true
}

//input: arrs
//output: boolean
