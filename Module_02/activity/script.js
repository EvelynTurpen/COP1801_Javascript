// Ask the user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");

// Create a constant to store the value of Pi (7 significant digits)
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("Please enter your favorite number:");

// Convert the favorite number from a string to a number
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the formula A = πr²
let myArea = piValue * (myFavNum * myFavNum);

// Display the results on the webpage
document.getElementById("output").innerHTML =
    "Hello " + Fname + ", you entered " + myFavNum +
    " as your favorite number. If that was the radius of a circle, the circle's area would be " +
    myArea + ".";

// Display each variable in the console
console.log("First Name:", Fname);
console.log("Pi Value:", piValue);
console.log("Favorite Number:", myFavNum);
console.log("Calculated Area:", myArea);