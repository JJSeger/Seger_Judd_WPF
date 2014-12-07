//freelance rates calculator for web design and development
//Judd Seger Week 2 12/06/14 Assignment Expressions_Industry


//declared variable otherDaysOff and assigned value
var otherDaysOff = 176;

//declared variable typicalYearlyHours and assigned value
var typicalYearlyHours = 2080;


//declared var billableHours and assigned value
var billableHours = otherDaysOff - typicalYearlyHours;

//Prompting user for their target salary
var targetSalary = prompt("What is your target salary?");


//calculates the associated costs by multiplying the target salary by 30%
var assocCost = targetSalary * .30;



//Displays the result of the associated costs
console.log("Your associated costs are based \n on thirty percent of your salary \n which is equal to " + assocCost);


//Displays the fact that there are 7 holidays, 2 weeks vacation, and 5 sick days included in this equation
console.log("We are going to also calculate in \n 7 legal holidays - 56 hours \n 2 weeks vacation - 80 hours" +
" \n and 5 sick days - 40 hours \n for a grand total of \n 176 hours ");

//created an alert that notifies the user what their total billable hours are
alert ("The grand total of your billable hours is" + billableHours);

// Creating Alert to notify the user that their are some additional deductions from billable hours
alert ("There are also some hours spend in the office doing other things\n these are not billable hours either.")

