//Judd Seger 12/18/14
//personal functions assignment
//measures sleep based on 8 hours per night




//prompting the user to enter their name and storing the value in "name"
var name = prompt("What is you name?");


//an alert saying helo to the user and stating the intentions
alert("Hello "+ name + " We are going to figure out together if you get enough sleep!");

//prompting the user to enter the amount of hours they work per day and storing the value in "work"
var work = prompt("How many hours do you spend working per day?");



//prompting the user to enter the amount of free time they have per day and storing the value in "freeTime"
var freeTime = prompt("How many hours of free time time \ndo you typically have per day?");



//prompting the user to enter the amount of hours they spend on studies per day and storing the value in "studies"
var studies = prompt("How many hours do you spend on your studies per day");

var sleepTimeAvailable = work + studies;
sleepTimeAvailable - 24;

//writes to the console the amount of sleep time available
console.log("That means that the sleep time you have available is equal to" + sleepTimeAvailable);



//calling the sleepTime function
sleepTime(2,4,8);



//SleepTime function w/ three parameters
function sleepTime(a,b,c){

     var justSaying = (a + b + c) ;

    console.log ("Hypothetically speaking if you were \nto only sleep 4 hrs. per day, \nwork for 8 hrs, and spend 2 hrs \nstudying you would only have " + justSaying - 24 + " hours \nleft to split between sleep and free time." );



}




// need an expression with two math operators

console.log("The numbers you have entered are " + freeTime + " hours for your free time \n " + work + " hours for your working hours\n and " + studies + " hours for your hours spent studying.");




//function checking the hours in a day compared to the hours worked

function workTime() {

    var workTime = work - 24;

   return  workTime;

}


//calling function
workTime();


//function that adds the value of the variables work + freeTime and subtracts it from the hours in a day
function studyTime() {

    var studyTime = work + freeTime - 24;

    return  studyTime;


}

//calling the studyTime function
studyTime();



//function that adds the value of the variables work + studies and subtracts it from the hours in a day
    function extraTime() {

        var extraTime = work + studies  - 24;

        return extraTime;
    }
extraTime();







//ternary operator


var totalHours;
totalHours = (studies + work + freeTime > 24 ) ? 'Total is too high!' : 'You need to adjust your hourly figures.';




















