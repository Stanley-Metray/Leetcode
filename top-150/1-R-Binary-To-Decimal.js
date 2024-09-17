console.clear();

var convertBinaryToDecimal = function (binaryString) {
    let decimal = 0;

    for (let i = 0; i < binaryString.length; i++) {
        decimal = decimal * 2 + Number(binaryString[i]);
    }

    return decimal;
};

// Test cases

// Test case 1: Basic case with a valid binary string
console.log("Test Case 1:", convertBinaryToDecimal("1010"));
// Expected output: 10
// Explanation: The binary number "1010" converts to the decimal number 10.

// Test case 2: Binary string with all ones
console.log("Test Case 2:", convertBinaryToDecimal("1111"));
// Expected output: 15
// Explanation: The binary number "1111" converts to the decimal number 15.

// Test case 3: Binary string with leading zeros
console.log("Test Case 3:", convertBinaryToDecimal("00101"));
// Expected output: 5
// Explanation: The leading zeros can be ignored, and the binary "101" converts to the decimal 5.

// Test case 4: Binary string with only one character "0"
console.log("Test Case 4:", convertBinaryToDecimal("0"));
// Expected output: 0
// Explanation: The binary string "0" is equivalent to the decimal number 0.

// Test case 5: Binary string with only one character "1"
console.log("Test Case 5:", convertBinaryToDecimal("1"));
// Expected output: 1
// Explanation: The binary string "1" is equivalent to the decimal number 1.

// Test case 6: Binary string with a large number
console.log("Test Case 6:", convertBinaryToDecimal("110110110101"));
// Expected output: 3509
// Explanation: The binary number "110110110101" converts to the decimal number 3509.

// Test case 7: Empty binary string
console.log("Test Case 7:", convertBinaryToDecimal(""));
// Expected output: 0
// Explanation: An empty string should return 0 as the binary string is invalid.

// Test case 8: Binary string with alternating ones and zeros
console.log("Test Case 8:", convertBinaryToDecimal("101010"));
// Expected output: 42
// Explanation: The binary number "101010" converts to the decimal number 42.

// Test case 9: Binary string of all zeros
console.log("Test Case 9:", convertBinaryToDecimal("00000"));
// Expected output: 0
// Explanation: The binary number "00000" converts to the decimal number 0.

// Test case 10: Binary string with a single "1" followed by multiple zeros
console.log("Test Case 10:", convertBinaryToDecimal("10000"));
// Expected output: 16
// Explanation: The binary number "10000" converts to the decimal number 16.
