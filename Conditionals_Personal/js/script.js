//Judd Seger 12/11/14
//Week 3 Personal conditionals Assignment
//This code decides if it is time to fill up your gas tank


//variable fullGasTank
var fullGasTank = 5;


//Simple greeting
var name = prompt("What is your name?");

//Greeting explaining what the purpose of the code is
console.log("Hello " + name +" Today we are going to figure out if \nit is time to put gas in your vehicle");

//declaring varible and assigning value of the user input
 var gasTank = prompt("What does your gas gauge read?\n Pleas enter:\n 5 - Full\n 4 - 3/4full\n 3 - 1/2full\n 2 - 1/4full\n 1 - Running on fumes");


//Creating If Statement to test the value o the variable gasTank
if(gasTank = fullGasTank) {
    console.log("Congrats! Your good to go!");}

    //nested If Statement
    if(gasTank < 5){
        console.log("Sorry but you should consider refueling.");

    }