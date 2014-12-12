//Judd Seger 12/11/14
//Week 3 assignment Conditionals wacky
//helps you figure out if you like chocolate ice cream




//Simple greeting that will alert if the field is not filled out
var name = prompt("What is your name?");

//If statement checking the variable name
if (name == "" ){

    //the alert that will come up if the name variable does not get a value
    alert("What, you don't know your name!?!");

}

//Greeting explaining what the purpose of the code is
console.log("Hello " + name +" Today we are going to figure out if \nyou like chocolate better than vanilla ice cream!!");

//declaring varible and assigning value of the user input
var chocolate = prompt("On a scale of 1-5, how much do you like chocolate ice cream?\n Please enter:\n 5 - MY FAVORITE!\n 4 - Really love it!\n 3 - Boy that is a hard decision!?!\n 2 - It's OK, I guess.\n 1 - EWW I HATE CHOCOLATE!!");


//Creating If / else Statement to test the value of the variable gasTank
// give a congrats message if tank is 3 or above
if(chocolate >= 3) {

    //prints to console
    console.log("Congrats! Your a chocolate lover");}

//else statement
//gives a sorry message for 2 or below
else{

    //prints to consol
    console.log("Sorry but you should consider sticking to vanilla.");
}


//If statement checking for a blank field
if(chocolate == "" ) {

    //the alert that will come up if the gasTank variable does not get a value
    alert("Sorry but you must fill out all fields...");

}



//if statement that alerts if value is over 5
if (chocolate > 5 || chocolate >= 6){


    //the alert that will come up if the gasTank variable gets a value greater than 5 or greater than or equal to 6
    alert("Sorry but you must enter a value from 1-5");


}






