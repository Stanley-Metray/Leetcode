console.clear();

function canCompleteCircuit(gas, cost) {
    let fuel = 0, totalDiff = 0, index = 0;

    if (gas.length !== cost.length) return -1;

    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];
        totalDiff += diff;
        fuel += diff;

        if (fuel < 0) {
            index = i + 1;
            fuel = 0;
        }
    }
    return totalDiff < 0 ? -1 : index;
}

// Test Case 1
let gas1 = [1, 2, 3, 4, 5];
let cost1 = [3, 4, 5, 1, 2];
let result1 = canCompleteCircuit(gas1, cost1);
console.log(`Test Case 1: ${result1}`);  // Expected Output: 3

// Test Case 2
let gas2 = [2, 3, 4];
let cost2 = [3, 4, 3];
let result2 = canCompleteCircuit(gas2, cost2);
console.log(`Test Case 2: ${result2}`);  // Expected Output: -1

// Test Case 3
let gas3 = [5, 1, 2, 3, 4];
let cost3 = [4, 4, 1, 5, 1];
let result3 = canCompleteCircuit(gas3, cost3);
console.log(`Test Case 3: ${result3}`);  // Expected Output: 4

// Test Case 4
let gas4 = [3, 3, 4];
let cost4 = [3, 4, 4];
let result4 = canCompleteCircuit(gas4, cost4);
console.log(`Test Case 4: ${result4}`);  // Expected Output: -1

// Test Case 5
let gas5 = [6, 1, 4, 3];
let cost5 = [5, 2, 3, 4];
let result5 = canCompleteCircuit(gas5, cost5);
console.log(`Test Case 5: ${result5}`);  // Expected Output: 0

// Test Case 6
let gas6 = [2, 2, 2, 2];
let cost6 = [3, 3, 3, 3];
let result6 = canCompleteCircuit(gas6, cost6);
console.log(`Test Case 6: ${result6}`);  // Expected Output: -1

// Test Case 7
let gas7 = [3, 3, 3];
let cost7 = [2, 2, 2];
let result7 = canCompleteCircuit(gas7, cost7);
console.log(`Test Case 7: ${result7}`);  // Expected Output: 0

// Test Case 8
let gas8 = [1, 2];
let cost8 = [2, 1];
let result8 = canCompleteCircuit(gas8, cost8);
console.log(`Test Case 8: ${result8}`);  // Expected Output: 1
