/*
Unit Project #1: Some Coding Challenges
Overview
Write the javascript code for the following problems. You have two additional problems as bonus questions to get extra credit.
Q1. Write a function to check if an array contains a particular number.
Examples
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
*/
console.log('\nQ1. Write a function to check if an array contains a particular number.'); 
function Checkarray(array,num){
    for (let key in array){
        if(num === array[key])
        return true;
    }
        return false;
}
console.log(Checkarray([1, 2, 3, 4, 5], 3)); //-> true
console.log(Checkarray([1, 1, 2, 1, 1], 3)); //-> false
console.log(Checkarray([5, 5, 5, 6], 5)); //-> true
console.log(Checkarray([], 5)); //-> false
/*
Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.
Examples
convertToSeconds(1, 3) ➞ 3780
convertToSeconds(2, 0) ➞ 7200
convertToSeconds(0, 0) ➞ 0
*/
console.log('\n Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.'); 
function convertToSeconds(HH,MM){
    var seconds = (+HH) * 60 * 60 + (+MM) * 60; 
    console.log(seconds);
}
convertToSeconds(1,3);//➞ 3780
convertToSeconds(2,0);//➞ 7200
convertToSeconds(0,0);//➞ 0

/*
Q3. Use the following data to solve the problems below.

*/
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer', 
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
//1- access the value of the capacityInGallons key
console.log(`\n1- access the value of the capacityInGallons key\n capacityInGallons= ${aquarium.capacityInGallons}`);
//2- add 2 rocks to the numberOfRocks in the aquarium
console.log('\n2- add 2 rocks to the numberOfRocks in the aquarium');
aquarium.numberOfRocks+=2;
console.log(`\nnumber Of Rocks =  ${aquarium.numberOfRocks}`);

//3- access the clown fish and print the object.
console.log('\n3- access the clown fish and print the object.');
let type='clown';
let Found=false;
for(let i=0; i<aquarium.fish.length ;i++ ){
        let Vfish =aquarium.fish[i];
        
        if(Vfish.type===type){
            console.log(`We have fish of type ${type} at ${i} index and object\ntype = ${Vfish.type} , size = ${Vfish.size} , color = ${Vfish.color}`);
            Found=true; //;)
        }
}
if(Found==false)
console.log(`Sorry, not found ${type} in object`);
//  4- access the size of the puffer fish. 
console.log('\n4- access the size of the puffer fish.');
let fish2='puffer';
for(let i=0; i<aquarium.fish.length ;i++ ){
    let Vfish =aquarium.fish[i];
    if(Vfish.type===fish2){
        console.log(`size = ${Vfish.size}\n`);
    }
}
//  5- your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
console.log(`5- your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.`);
gold='goldfish';
for(let i=0; i<aquarium.fish.length ;i++ ){
        let Vfish =aquarium.fish[i];
        if(Vfish.type===gold){
            Vfish.size='4 inches';
            console.log(`new size of gold fish is ${Vfish.size}\n`);
        }
}
//  6- you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
console.log(`6- you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.`);
newfish={type:'blue starfish',
            size:'5 inches',
            color:'blue'}

aquarium.fish.push(newfish);
console.log(aquarium.fish);


/*
Q4. The following JSON object has been provided to you in data.js:
    This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.
    What to do?
3.Create a main.js file and write the following functions
    Write a function that console.logs each character object in the data.
let logData = function() {
}
*/
data = (require('./data'));
var parsed = JSON.parse(data);

let logData = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log(parsed.people[i])
    }
}
console.log(logData())

//---------------------
let logNames = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log("logName: " + parsed.people[i].name)
    }
}

console.log(logNames())

//---------------------------------
let logNameEyes = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        console.log("Name: " + parsed.people[i].name +
            ".      Eye color: " + parsed.people[i].eye_color)
    }
};
console.log(logNameEyes())
//---------------------------------
let logByMass = function () {
    for (var i = 0; i < parsed.people.length; i++) {
        if (parsed.people[i].mass > 75) {
            console.log("Name: " + parsed.people[i].name)
        }
    }
};
console.log(logByMass())

//---------------------Bonus Questions:-----------------------

console.log("Bonus Q1")
let randomNumber = function(num){
    return Math.floor(Math.random() * Math.floor(num))
}
console.log("Random number: " + randomNumber(5))


//Q2:
console.log("Bonus Q2")
let divisible = function(num){
    if((num % 400 == 0) || (num % 4 == 0) && !(num % 100 == 0)){
        return true
    }else{
        return false
    }
}
console.log("Divisible: " + divisible(2020))
console.log("Divisible: " + divisible(1800))
console.log("Divisible: " + divisible(2000))
console.log("Divisible: " + divisible(2019))
