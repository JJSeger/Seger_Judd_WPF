//Judd Seger 12/18/14
//personal functions assignment
//measures sleep based on 8 hours per night





//prompting the user to enter their name and storing the value in "name"
var name = prompt("What is you name?");


//an alert saying helo to the user and stating the intentions
alert("Hello "+ name + " We are going to figure out together if you get enough sleep!");


//prompting the user to enter the amount of free time they have per day and storing the value in "freeTime"
var freeTime = prompt("How many hours of free time time \ndo you typically have per day?");


//prompting the user to enter the amount of hours they work per day and storing the value in "work"
var work = ("How many hours do you spend working per day?");


//prompting the user to enter the amount of hours they spen on studies per day and storing the value in "studies"
var studies = ("How many hours do you spend on your studies per day");


// need an expression with two math operators








//This is a one-line shorthand for an if-then statement. It is called a ternary operator or a conditional operator.

  //  Here is an example of code that could be shortened with the conditional operator:

    //if(user is Over 21) {
      //  serveGrapeJuice();
 //   }
   // else {
     //   serveWine();
    //    }

//This can be shortened with the ?: like so:



//In Javascript conditional operator can evaluate to an expression, not just a statement:

 //   var userType = userIsYoungerThan18 ? "Minor" : "Adult";
// serveDrink(userIsYoungerThan21 ? "Grape Juice" : "Wine");




//terney operator

//   r = (condition) ? 'something' : 'somethingelse';






//else if statement

if (condition) {
    block of code to be executed if the condition is true
} else {
    block of code to be executed if the condition is false
}


//function with three parameters







         // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}








//at least one logical operator

//  !,&&,||






//anonymous function

var cacArea  = function(width, height){

//    code to run

    var area = wisth * heig=ht;
    return area;

}
var workHoursPerDay;
workHoursPerDay = function typicalWorkHoursPerDay() {

    var day = 24;
    var workingHours = 8;
    var leftOverTime = day - workingHours;


    console.log("The stereotypical person \nhas " + leftOverTime + " hours to \ndevote to studies, family and sleep.");


};



//invocation of  anonymous function
typicalWorkHoursPerDay();





//calcArea( args, args );




