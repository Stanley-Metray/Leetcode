console.clear();

var decimalToBinary = function (decimalNumber) {
    let binary = '';

    if (decimalNumber === 0) return '0';
    if (decimalNumber === 1) return '1';

    while (decimalNumber > 0) {
        let remainder = Math.floor(decimalNumber % 2);
        binary = remainder + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binary;
};

// Test cases

// Test case 1: Basic case with a small positive number
console.log("Test Case 1:", decimalToBinary(10));
// Expected output: "1010"
// Explanation: The decimal number 10 converts to the binary string "1010".

// Test case 2: Small positive number
console.log("Test Case 2:", decimalToBinary(7));
// Expected output: "111"
// Explanation: The decimal number 7 converts to the binary string "111".

// Test case 3: Decimal number 0
console.log("Test Case 3:", decimalToBinary(0));
// Expected output: "0"
// Explanation: The decimal number 0 converts to the binary string "0".

// Test case 4: Decimal number 1
console.log("Test Case 4:", decimalToBinary(1));
// Expected output: "1"
// Explanation: The decimal number 1 converts to the binary string "1".

// Test case 5: Large decimal number
console.log("Test Case 5:", decimalToBinary(3509));
// Expected output: "110110110101"
// Explanation: The decimal number 3509 converts to the binary string "110110110101".

// Test case 6: Decimal number that is a power of 2
console.log("Test Case 6:", decimalToBinary(16));
// Expected output: "10000"
// Explanation: The decimal number 16 (a power of 2) converts to the binary string "10000".

// Test case 7: Decimal number with alternating bits in binary representation
console.log("Test Case 7:", decimalToBinary(42));
// Expected output: "101010"
// Explanation: The decimal number 42 converts to the binary string "101010".

// Test case 8: Decimal number with all ones in binary
console.log("Test Case 8:", decimalToBinary(15));
// Expected output: "1111"
// Explanation: The decimal number 15 converts to the binary string "1111".

// Test case 9: Very large decimal number
console.log("Test Case 9:", decimalToBinary(123456));
// Expected output: "11110001001000000"
// Explanation: The decimal number 123456 converts to the binary string "11110001001000000".

// Test case 10: Decimal number with trailing zeros in binary representation
console.log("Test Case 10:", decimalToBinary(32));
// Expected output: "100000"
// Explanation: The decimal number 32 converts to the binary string "100000" (which has trailing zeros).
