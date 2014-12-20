
//Judd Seger 12/18/14
//personal functions assignment
//measures time working based on 8 hours per shift/40 hrs per week




//prompting the user to enter their name and storing the value in "name"
var name = prompt("What is you name?");


//an alert saying helo to the user and stating the intentions

 alert("Hello "+ name + " We are going to figure out if you get enough work hours per week \nor if you should as your boss for more hours");

//prompting the user to enter the amount of hours they work per day and storing the value in "work"
var work = prompt("How many hours do you typically spend working per day?");

//prompting user for the hours of work they get per week
var workWeek = prompt("How many hours do you typically work per week?");






//prompting the user to enter the amount of hours they spend on studies per day and storing the value in "studies"
var studies = prompt("How many hours do you spend on your studies per day");

var studyWeek = studies * 7;






myWorkFunction();

studyTimeFunction();

totalWorkFunction();













// need an expression with two math operators

console.log("You have entered " + jobLike + " for liking your job\n " + work + " hours for your working hours per day\n and " + studies + " hours for your hours spent studying.");



//function checking the hours in a day compared to the hours worked

var r = myWorkFunction(work, 24);        // Function is called, return value will end up in r

function myWorkFunction(work, a ) {

    return ( work )- a ;                // Function returns the difference of work - 24



}
alert("You have a total of " + r + " hours left for studies and sleep.");



//function that adds the value of the variables work + studies and subtracts it from the hours in a day

var s = studyTimeFunction(work, studies, 24); // Function is called, return value will end up in s

function studyTimeFunction(work, studies, a) {

    return (work + studies) - a;



}

alert("You have a total of " + s + " hours left for spending time with you family and sleep. per day");



// that adds work time, study time , and study time



var z = totalWorkFunction( workWeek, studyWeek );

function totalWorkFunction(workWeek, studyWeek){


    return (workWeek + studyWeek);

}


alert("You have a total of " + z + " hours left to spilt up between sleeping and family time.");





//ternary operator

var workEnough = z < 40 ? 'You should ask your boss for more hours' : 'You get at least 40 hrs per week ';


//alert for ternary
alert(workEnough);



















