//freelance rates calculator for web design and development
//Judd Seger Week 2 12/06/14 Assignment Expressions_Industry


//declared variable otherDaysOff and assigned value
var otherDaysOff = 176;

//declared variable typicalYearlyHours and assigned value
var typicalYearlyHours = 2080;


//declared var billableHours and assigned value
var billableHours = otherDaysOff - typicalYearlyHours; //(First Calculation)

//Prompting user for their target salary
var targetSalary = prompt("What is your target salary?");


//calculates the associated costs by multiplying the target salary by 30%
var assocCost = targetSalary * .30; //second calculation



//Displays the result of the associated costs
console.log("Your associated costs are based \n on thirty percent of your salary \n which is equal to " + assocCost);




//created an alert that notifies the user what their total billable hours are
alert("Your billable hours are" + billableHours + " per year");


//Displays the fact that there are 7 holidays, 2 weeks vacation, and 5 sick days included in this equation
console.log("We are going to also calculate in \n 7 legal holidays - 56 hours \n 2 weeks vacation - 80 hours" +
" \n and 5 sick days - 40 hours \n for a grand total of \n 176 hours ");


// Creating Alert to notify the user that their are some additional deductions from billable hours
alert("There are also some hours spend in the office doing other things\n these are not billable hours either.");


// prompt user to enter addition hours that need to be deducted from the billable hours
var hourDed = prompt("Out of the total billable hours," + billableHours + ",\nhow many hours per week are spent doing other things?");

//declared variable weekHour that multiplies the final hourly deduction by the weeks in a year
var weekHour = hourDed * 56;


//declared a variable with the value of the result of hourDed minus billableHours
var actHours = weekHour - billableHours;



//actual hours alert that displays the total billable hours minus extra hours spent in the office
alert("Now this is more like it!\n " + actHours + " hours, \nthese are the actual hours you can bill for. ");



//salary information alert
alert ("Now what we are going to do is factor in salary information");



//declaring the variable salary as the value of the user input
var salary = prompt(" How much do you pay in salary to yourself\n and your employees per year? ");

//declaring the variable totalFee and assigning it the value of salary divided by actHours
var totalFee = salary / actHours;










