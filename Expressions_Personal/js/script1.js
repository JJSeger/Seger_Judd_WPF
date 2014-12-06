/**
 * Created by JuddHome on 12/6/14.
 */


var glassDay = 8;





var name = prompt("What is your name?");

var water = prompt("Hello " + name ,"How many glasses of water do you drink daily?");

var moreWater = glassDay - water;



    if(water >= glassDay){

           "Congrats! You are drinking enough water daily! "

                        }
    else(water < glassDay){


         "You should be drinking" + moreWater ," more glasses of water per day!"




}