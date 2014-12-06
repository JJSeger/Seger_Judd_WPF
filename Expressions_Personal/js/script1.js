/**
 * Created by JuddHome on 12/6/14.
 */








var name = prompt("What is your name?");

var water = prompt("Hello " + name ,"How many glasses of water do you drink daily?");

var glassDay = 8 - water;

var waterMonth = glassDay * 30;


alert ("You need to drink " + glassDay + " more per day!!");

alert ("That means you need to drink " + waterMonth + "\n more glasses every thirty days! ");