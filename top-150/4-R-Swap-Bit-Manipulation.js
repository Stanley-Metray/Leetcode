// Function signature
var swap = function(a, b) {

    // XOR does not work on floating point 
    // a = (a^b);
    // b = (a^b);
    // a = (a^b);

    // using destructuring 

    [a,b] = [b, a];

    return [a, b]; // Return swapped values as a tuple or array.
};

// Test cases

// Test case 1: Swapping two positive numbers
console.log("Test Case 1:", swap(3, 5));
// Expected output: [5, 3]
// Explanation: The values 3 and 5 are swapped, so the result is [5, 3].

// Test case 2: Swapping a positive and a negative number
console.log("Test Case 2:", swap(10, -2));
// Expected output: [-2, 10]
// Explanation: The values 10 and -2 are swapped, so the result is [-2, 10].

// Test case 3: Swapping two negative numbers
console.log("Test Case 3:", swap(-8, -4));
// Expected output: [-4, -8]
// Explanation: The values -8 and -4 are swapped, so the result is [-4, -8].

// Test case 4: Swapping a number with zero
console.log("Test Case 4:", swap(0, 7));
// Expected output: [7, 0]
// Explanation: The values 0 and 7 are swapped, so the result is [7, 0].

// Test case 5: Swapping two zeros
console.log("Test Case 5:", swap(0, 0));
// Expected output: [0, 0]
// Explanation: Both numbers are 0, so the result remains [0, 0].

// Test case 6: Swapping two large numbers
console.log("Test Case 6:", swap(1000000, 500000));
// Expected output: [500000, 1000000]
// Explanation: The values 1000000 and 500000 are swapped, so the result is [500000, 1000000].

// Test case 7: Swapping two identical numbers
console.log("Test Case 7:", swap(42, 42));
// Expected output: [42, 42]
// Explanation: Both numbers are the same, so the result remains [42, 42].

// Test case 8: Swapping two fractional numbers
console.log("Test Case 8:", swap(2.5, 3.5));
// Expected output: [3.5, 2.5]
// Explanation: The fractional values 2.5 and 3.5 are swapped, so the result is [3.5, 2.5].

// Test case 9: Swapping a positive and a fractional number
console.log("Test Case 9:", swap(1, 2.8));
// Expected output: [2.8, 1]
// Explanation: The values 1 and 2.8 are swapped, so the result is [2.8, 1].

// Test case 10: Swapping a large negative and large positive number
console.log("Test Case 10:", swap(-100000, 100000));
// Expected output: [100000, -100000]
// Explanation: The values -100000 and 100000 are swapped, so the result is [100000, -100000].
