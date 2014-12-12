//Judd Seger 12/11/14
//Week 3 assignment Conditionals wacky





//Simple greeting that will alert if the field is not filled out
var name = prompt("What is your name?");

//If statement checking the variable name
if (name == "" ){

    //the alert that will come up if the name variable does not get a value
    alert("Sorry but none of this counts without your name!?!");

}

//Greeting explaining what the purpose of the code is
console.log("Hello " + name +" Today we are going to figure out if \nit is time to put gas in your vehicle");

//declaring varible and assigning value of the user input
var gasTank = prompt("What does your gas gauge read?\n Please enter:\n 5 - Full\n 4 - 3/4full\n 3 - 1/2full\n 2 - 1/4full\n 1 - Running on fumes");


//Creating If / else Statement to test the value of the variable gasTank
// give a congrats message if tank is 3 or above
if(gasTank >= 3) {

    //prints to console
    console.log("Congrats! Your good to go!");}

//else statement
//gives a sorry message for 2 or below
else{

    //prints to consol
    console.log("Sorry but you should consider refueling.");
}


//If statement checking for a blank field
if(gasTank == "" ) {

    //the alert that will come up if the gasTank variable does not get a value
    alert("Sorry but you must fill out all fields...");

}



//if statement that alerts if value is over 5
if (gasTank > 5 || gasTank >= 6){


    //the alert that will come up if the gasTank variable gets a value greater than 5 or greater than or equal to 6
    alert("Sorry but you must enter a value from 1-5");


}






