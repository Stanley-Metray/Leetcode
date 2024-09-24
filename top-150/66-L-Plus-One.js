console.clear();

function plusOne(digits) {
    
}

// Test cases

// Test case 1: Incrementing a number with no carry
console.log("1: ", plusOne([1, 2, 3]));
// Expected output: [1, 2, 4]

// Test case 2: Incrementing a number with no carry
console.log("2: ", plusOne([4, 3, 2, 1]));
// Expected output: [4, 3, 2, 2]

// Test case 3: Incrementing a single digit number
console.log("3: ", plusOne([9]));
// Expected output: [1, 0]

// Test case 4: Incrementing a number resulting in a carry
console.log("4: ", plusOne([1, 9, 9]));
// Expected output: [2, 0, 0]

// Test case 5: Incrementing a number with multiple nines
console.log("5: ", plusOne([9, 9, 9]));
// Expected output: [1, 0, 0, 0]

// Test case 6: Incrementing a large number
console.log("6: ", plusOne([1, 2, 9]));
// Expected output: [1, 3, 0]

// Test case 7: Incrementing a number with leading 0s (invalid case, but for robustness)
console.log("7: ", plusOne([0]));
// Expected output: [1]

// Test case 8: Incrementing a number that is already at a boundary
console.log("8: ", plusOne([1, 0, 0, 0, 0]));
// Expected output: [1, 0, 0, 0, 1]

// Test case 9: Large number with no carries
console.log("9: ", plusOne([2, 3, 4, 5, 6]));
// Expected output: [2, 3, 4, 5, 7]

// Test case 10: Edge case with a single zero
console.log("10: ", plusOne([0]));
// Expected output: [1]
