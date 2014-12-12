//Judd Seger 12/11/14
//Week 3 Personal conditionals Assignment
//This code decides if it is time to fill up your gas tank



var gasTank;



//Simple greeting
var name = prompt("What is your name?");

//Greeting explaining what the purpose of the code is
console.log("Hello " + name +" Today we are going to figure out if \nit is time to put gas in your vehicle");

//declaring varible and assigning value of the user input
 gasTank = prompt("Is your gas gauge below 1/4 tank remaining?");


//Creating If Statement to test the value o the variable gasTank
if(gasTank == false) {

    console.log("Congrats! Your good to go!");

    //nested If Statement
    if(gasTank == true )
    {
        console.log(" Terribly sorry but you must \nput gas in your vehicle VERY SOON!");


    }

}