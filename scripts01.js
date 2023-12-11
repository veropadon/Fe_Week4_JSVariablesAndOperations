/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
  Veronica Padon

*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1: Number of Seats on a Plane: " + 150);

var availableSeats;

availableSeats = 150;



console.log("Step 2:  Cost of Groceries" , `${15.00}`);

var costOfGroceries;

costOfGroceries = '15.00';



console.log("Step 3:  Middle Initial" , "" + 'M');

var middleInitial;

middleInitial = 'M';



console.log("Step 4:  Is it Hot Outside?", "" + true);

let isItHotOutside;

isItHotOutside = true;




console.log("Step 5:  First Name = ", "" + 'Gabriel');

var customerFirstName;
 customerFirstName = 'Gabriel' ;



console.log("Step 6:  Street Address=", "" + '20 BLVD drive 48 ST ');

var streetAddress;
 streetAddress = '20 BLVD drive 48 ST ';



/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:', "", 150 -2);

//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓

var planeSeats;
planeSeats = 150;






    console.log('Buy a Candy Bar:' ,"" ,2.15 + 15 )
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓

var candyBarPurchase = 2.15;



    console.log('Fix a Birth Certificate:'+ 'S');
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓

var originalInitialName = 'M';

var changeMiddleInitial = originalInitialName.replace('M.', 'S.');



    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓

var originalWeather = 'isHotOutside';

var changedWeather = originalWeather.replace('isHotOutside' , 'isColdOutside');
console.log(' Weather changed:' + changedWeather);



    

    console.log('Full Name:' + 'Veronica Padon');
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓

var firstName = 'Veronica';
var middleName = 'Padon';
var fullName = 'Veronica Padon';





   
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓

var customerName = 'Ana';
var address = '20 Blvd 1st Hamilton RD';
var introducedCustomer = 'Ana 20 Blvd 1st Hamilton RD';




    console.log(introducedCustomer);