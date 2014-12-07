// This is a Wacky Calculator that is going to calculate farts
//Judd Seger- Week 2 Assignment - Expressions_Wacky


// created initial warning alert


//created initial prompt and assigned it to the variable fart and assigned it a string value
var fart = [prompt("Have you ever wondered how\n many times you pass gas during the day?\n Enter 1 for yes\n Enter 2 for NO")];


// Created the Good us too alert
alert(+ fart + " Good Because We Have Too! ");


//prompting the user to enter how many times per hour they pass gas
var bigFart = prompt("Now we obviously have to ask...\n  how many times per HOUR do you, how can we put it....\n  Float the old rotten apple?");

//creating a variable dayFart to store the amount of times per day that the user breaks wind
var dayFart = bigFart * 24;//First calculation



// displaying to the console that we need to multiply by 24
console.log("That means that in order for us to calculate\n how many times you burn your britches \nwe need to multiply by 24 hours in a day.");


//an alert displaying the result of dayFart
alert(+dayFart + " farts per day!\nWow, maybe we should consider a clothespin on the nose!");

//console.log displaying how we get the amount of times we pass gas per minute
console.log("So in order for us to calculate\n how many times we \"break wind\" per minute\n we need to divide by 60.");


//declaring var perMin
var perMin;


// Assigning the perMin variable the value of bigFart divided by 60
perMin = bigFart / 60;     //Second Calculation


//alert displaying how many times per minute you break wind
alert("That means that every minute,\n your \"breakin your bum\" approx." + perMin + " times!");


//Nice Job alert
alert("NICE JOB!");



//console.log displaying how the user can calculate how many times per year they fart
console.log("We can also calculate how many times\nper year you fart by multiplying your\ninitial response by 24 and then again by 356!");



//declaring variable cropDust to the value of dayFart multiplied by 356(day in year)
var cropDust = dayFart * 356;



// creating an alert to display how many times per year user farts
alert("That also means that every year\nyou are crop dusting approx. " + cropDust + " times!");