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


//mySleepFunction

var x = mySleepFunction(4, 6, 8);        // Function is called, return value will end up in x

function mySleepFunction(a, b, c) {
    return (a + b + c) - 24;                // Function returns the product of a,b and c


alert("Hypothetically speaking \n if you were to have two hours of studying \n fours hours of sleep \n and the typical eight hours at work \n " +
"that would leave you with " + x +" to split up \nbetween your studies and everything else life throws at you " );


}
mySleepFunction();



// need an expression with two math operators

console.log("The numbers you have entered are " + freeTime + " hours for your free time \n " + work + " hours for your working hours\n and " + studies + " hours for your hours spent studying.");



//function checking the hours in a day compared to the hours worked

var r = myWorkFunction(work - 24);        // Function is called, return value will end up in r

function mySleepFunction() {
    return r;                // Function returns the difference of work - 24

}

//invoking myWorkFunction function
myworkFunction();


//function that adds the value of the variables work + freeTime and subtracts it from the hours in a day

    var s = studyTimeFunction(work + freeTime - 24);

    function studyTimeFunction() {

    return s;


}


//invoking  the studyTimeFunction function
studyTime();



//function that adds the value of the variables work + studies and subtracts it from the hours in a day
    function extraTime() {

        var extraTime = work + studies  - 24;

        return extraTime;
    }
extraTime();







//ternary operator


var totalHours(r, ,  );
totalHours = (studies + work + freeTime > 24 ) ? 'Total is too high!' : 'You need to adjust your hourly figures.';




















