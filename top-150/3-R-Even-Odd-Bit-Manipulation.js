// Function signature
var isEven = function(num) {
    if((num & 1)===0)
        return true;
    else
       return false;
};

// Test cases

// Test case 1: A small even number
console.log("Test Case 1:", isEven(2));
// Expected output: true
// Explanation: 2 is an even number.

// Test case 2: A small odd number
console.log("Test Case 2:", isEven(3));
// Expected output: false
// Explanation: 3 is an odd number.

// Test case 3: Zero as an even number
console.log("Test Case 3:", isEven(0));
// Expected output: true
// Explanation: 0 is considered an even number.

// Test case 4: A negative even number
console.log("Test Case 4:", isEven(-4));
// Expected output: true
// Explanation: -4 is an even number.

// Test case 5: A negative odd number
console.log("Test Case 5:", isEven(-5));
// Expected output: false
// Explanation: -5 is an odd number.

// Test case 6: A large even number
console.log("Test Case 6:", isEven(1000000));
// Expected output: true
// Explanation: 1000000 is an even number.

// Test case 7: A large odd number
console.log("Test Case 7:", isEven(999999));
// Expected output: false
// Explanation: 999999 is an odd number.

// Test case 8: A small odd number (1)
console.log("Test Case 8:", isEven(1));
// Expected output: false
// Explanation: 1 is an odd number.

// Test case 9: The smallest even positive number
console.log("Test Case 9:", isEven(2));
// Expected output: true
// Explanation: 2 is the smallest even positive number.

// Test case 10: A large negative even number
console.log("Test Case 10:", isEven(-10000000));
// Expected output: true
// Explanation: -10000000 is an even number.
