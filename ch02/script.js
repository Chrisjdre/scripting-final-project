
// Part 1
console.log("Part 1"); // for clarity when reading the console there will be more of theses
// Step 1 -Create array
var states = ["iowa", "missouri"];
// Step 2 -Print both values
console.log("Step 2");
console.log(states[0]);
console.log(states[1]);
// Step 3 - add third state
states.push("Alaska");
// Step 4
console.log("Step 4");
console.log(states[0]);
console.log(states[1]);
console.log(states[2]);
// Step 5
states.shift();
// Step 6
console.log("Step 6");
console.log(states[0]);
console.log(states[1]);
// Step 7
states[0] = "Florida";
// Step 8
console.log("Step 8");
console.log(states[0]);
console.log(states[1]);

// Part 2
console.log("Part 2");
// Step 1
var state= [
    ["iowa", 1846],
    ["Missouri", 1821]
];
// Step 2
console.log("Step 2");
console.log(state[0][0]);
console.log(state[0][1]);

console.log(state[1][0]);
console.log(state[1][1]);
// Step 3
state.unshift(["alaska", 1959]);
// Step 4
console.log("Step 4");  
console.log(state[0][0]);
console.log(state[0][1]);

console.log(state[1][0]);
console.log(state[1][1]);

console.log(state[2][0]);
console.log(state[2][1]);
// Step 5
state.splice(1,1)
// Step 6
console.log("Step 6");
console.log(state[0][0]);
console.log(state[0][1]);

console.log(state[1][0]);
console.log(state[1][1]);
// Step 7
state[1] = ["texas", 1845];
// Step 8
console.log("Step 8");
console.log(state[0][0]);
console.log(state[0][1]);

console.log(state[1][0]);
console.log(state[1][1]);

// Part 3
console.log("Part 3"); 
// Step 1
var state3 = new Object();
state3.name = "iowa";
state3.population = 3190369;
state3.areaSquareMiles = 55858.1;
// Step 2
var popden = state3.population/state3.areaSquareMiles;
console.log("Iowa's population density is "+(Math.round(popden*10)/10) +" people per square mile.");