// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');
let lineBreak = "-------------------------------------";
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = Number(input.question("Enter a number of an astronaut: "));
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg; 
let fuelTempCelsius = "-225 C";
let fuelLevel = "100%";
let weatherStatus = "clear";   



// Write code to generate the LC04 report here:
console.log(lineBreak);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(lineBreak);
console.log("Date: " + date);
console.log("Time: " + time + '\n');

console.log(lineBreak);
console.log("> ASTRONAUT INFO");
console.log(lineBreak);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus + '\n');

console.log(lineBreak);
console.log("> FUEL DATA");
console.log(lineBreak);
console.log("* Fuel temp celsius: " + fuelTempCelsius);
console.log("* Fuel level: " + fuelLevel + '\n');

console.log(lineBreak);
console.log("> WEIGHT DATA");
console.log(lineBreak);
console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: "+ fuelMassKg + "kg");
console.log("* Shuttle mass: "+ shuttleMassKg + "kg");
console.log("* Total mass: "+ totalMassKg + "kg" + '\n');

console.log(lineBreak);
console.log("> FLIGHT PLAN");
console.log(lineBreak);
console.log("* weather: " + weatherStatus + '\n');

console.log(lineBreak);
console.log("> OVERALL STATUS");
console.log(lineBreak);
console.log("* Clear for takeoff: YES");



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.