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



