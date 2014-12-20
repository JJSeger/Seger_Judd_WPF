//Judd Seger 12/18/14
//personal functions assignment
//measures sleep based on 8 hours per night




//prompting the user to enter their name and storing the value in "name"
var name = prompt("What is you name?");


//an alert saying helo to the user and stating the intentions
alert("Hello "+ name + " We are going to figure out together if you get enough sleep!");

//prompting the user to enter the amount of hours they work per day and storing the value in "work"
var work = prompt("How many hours do you spend working per day?");

//prompting user for the hours of sleep they get
prompt("How many hours of sleep do you typically get per night?");


//prompting the user to enter the amount of free time they have per day and storing the value in "freeTime"
var freeTime = prompt("How many hours of free time time \ndo you typically have per day?");



//prompting the user to enter the amount of hours they spend on studies per day and storing the value in "studies"
var studies = prompt("How many hours do you spend on your studies per day");



var wo = work;
var fr = freeTime;
var st = studies;




myWorkFunction();

studyTimeFunction();

extraTimeFunction();

totalSleepFunction();











// need an expression with two math operators

console.log("The numbers you have entered are " + freeTime + " hours for your free time \n " + work + " hours for your working hours\n and " + studies + " hours for your hours spent studying.");



//function checking the hours in a day compared to the hours worked

var r = myWorkFunction(work );        // Function is called, return value will end up in r
function myWorkFunction(work) {
    return (work) - 24;                // Function returns the difference of work - 24



}
alert("You have a total of " + r + " hours left for studies, freetime and sleep.");



//function that adds the value of the variables work + freeTime and subtracts it from the hours in a day

    var s = studyTimeFunction(work, freeTime); // Function is called, return value will end up in s

    function studyTimeFunction(work, freeTime) {

    return (work + freeTime) - 24;



}

alert("You have a total of " + s + " hours left for to split up between studing and sleeping.");



//function that adds the value of the variables work + studies and subtracts it from the hours in a day

    var t = extraTimeFunction(work, studies ); // Function is called, return value will end up in t

    function extraTimeFunction(work, studies) {

        return  (work + studies) - 24;



        }

alert("You have a total of " + t + " hours left to spilt up between sleeping and free time.");

// that adds worktime, freetime, and study time and subtracts it from 24

var z = totalSleepFunction( work, studies , freeTime);

function totalSleepFunction(work,studies,freeTime){


    return (work + studies + freeTime);

}





//ternary operator

z > 16 ? 'You need to get more sleep' : 'You get plenty of sleep ';

























