/**
 * Created by JuddHome on 12/6/14.
 */








var name = prompt("What is your name?");// simple name prompt


// Says Hello while using the persons name
var water = prompt("Hello " + name ,"How many glasses of water do you drink daily?");

//declares variable glassDay and assigns the value of 8 minus the users input (first calculation)
var glassDay = 8 - water;


//declares the variable waterMonth and assigns the value as the value of glassDay multiplied by 30(Second calculation)
var waterMonth = glassDay * 30;


//declares the variable waterYear and assigns the value of glassDay multiplied by 356(Third calculation)
var waterYear = glassDay * 356;



// simple alert notifying the user of how many glasses of water per day are needed
alert ("You need to drink " + glassDay + " more per day!!");


//notifies the user how many more glasses of water are needed every thirty days
alert ("That means you need to drink " + waterMonth + "\n more glasses every thirty days! ");

// notifies the user how many more glasses of water are needed per year
alert ("That also means you need to drink " + waterYear + "\n more glasses of water every year!");