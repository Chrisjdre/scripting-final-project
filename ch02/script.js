
// Part 1

// Step 1 -Create array
var states = ["iowa", "missouri"];
// Step 2 -Print both values
console.log(states[0]);
console.log(states[1]);
// Step 3 - add third state
states.push("Alaska");
// Step 4
console.log(states[0]);
console.log(states[1]);
console.log(states[2]);
// Step 5
states.shift();
// Step 6
console.log(states[0]);
console.log(states[1]);
// Step 7
states[0] = "Florida";
// Step 8
console.log(states[0]);
console.log(states[1]);

// Part 2

// Step 1
var state= [
    ["iowa", 1846],
    ["missiuri", 1821]
];
// Step 2
console.log(state[0,0]);
console.log(state[1,1]);
// Step 3
state.unshift("alaska", 1959);
// Step 4
console.log(state[2,2]);