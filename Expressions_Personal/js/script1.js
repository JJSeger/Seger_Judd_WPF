/**
 * Created by JuddHome on 12/6/14.
 */


var glassDay = 8;





var name = prompt("What is your name?");

var water = prompt("Hello " + name ,"How many glasses of water do you drink daily?");

var dailyWater = water - glassDay;
var moreWater = glassDay - dailyWater;
if (dailyWater < glassDay) alert ("You should be drinking " + moreWater, " more glasses! ") ;

(dailyWater)