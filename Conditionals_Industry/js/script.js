//Judd Seger   12/11/14
//Week 3 Conditionals_industry assignment
//What background color would you like on your website





//simple greeting that will alert if the field is not filled out
var name = prompt("What is your name?");

//If statement checking the variable name
if (name == "" ) {

    //the alert that will come up if the name variable does not get a value
    alert("Sorry but this will not be recorded without your name!?!");
}
// alert stating the purpose of the program
alert("Hello " + name + " Today we are going to choose\n the color background for your brand new website.");

//created a prompt for the question
var good = prompt("Does this sound good to you?");



//if/else statement
if(good == true){

    console.log("Wonderful" + name +" then lets get going!");
}
    else{

    console.log("Sorry to hear that!\n Especially considering\n we are going o do it anyway!");
        }



//if statement that tests the variable good and alerts if the field is not filled out
if (good == "" ) {

    //the alert that will come up if the name variable does not get a value
    alert("All fields must be completed!");
}
//var color that asks for a choice of colors
var color = prompt("We currently have three choices\n of colors for your new websites background" + name + " press 1 for purple\n press 2 for olive green\n press 3 for navy blue ");

if (color ==1 )
{console.log ("You have picked purple!!!!");


        //tests to see if color is equal to 2
    if (color !=1 || color < 3){
       console.log("You have picked olive green!!!!");

        //else statement
    }else {console.log("You have picked navy blue!!!!")}



}

//If statement that test to make sure the field is filled out
if (color == "" ) {

    //the alert that will come up if the color variable does not get a value
    alert("All fields must be completed!");

}
    // checks the variable color to make sure it is within its parameters
    if (color > 3 || color < 1){

        alert("You must pick a number between 1 and 3!!!");
    }