//Judd Seger 12/11/14
//Week 3 Personal conditionals Assignment
//This code decides if it is time to fill up your gas tank





//Simple greeting
var name = prompt("What is your name?");

//Greeting explaining what the purpose of the code is
console.log("Hello " + name +" Today we are going to figure out if \nit is time to put gas in your vehicle");

//declaring varible and assigning value of the user input
 var gasTank = prompt("What does your gas gauge read?\n Please enter:\n 5 - Full\n 4 - 3/4full\n 3 - 1/2full\n 2 - 1/4full\n 1 - Running on fumes");


//Creating If / else Statement to test the value of the variable gasTank
// give a congrats message if tank is 3 or above
if(gasTank >= 3) {
    console.log("Congrats! Your good to go!");}

    //else statement
    //gives a sorry message for 2 or below
   else{
        console.log("Sorry but you should consider refueling.");
    }


//If statement checking for a blank field
if(gasTank == "" ) {

    alert("Sorry but you must fill out all fields...");

}



//if statement that alerts if value is over 5
if (gasTank > 5){

    alert("Sorry but you must enter a value from 1-5");


            }

