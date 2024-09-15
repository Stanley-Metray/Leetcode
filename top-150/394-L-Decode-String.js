var decodeString = function(s) {

}


// Test cases

// Test case 1: Basic case with single digits
console.log("Test Case 1:", decodeString("3[a]2[bc]"));
// Expected output: aaabcbc

// Test case 2: Nested encoding
console.log("Test Case 2:", decodeString("3[a2[c]]"));
// Expected output: accaccacc

// Test case 3: Multiple sequences
console.log("Test Case 3:", decodeString("2[abc]3[cd]ef"));
// Expected output: abcabccdcdcdef

// Test case 4: Large number of repetitions (double-digit)
console.log("Test Case 4:", decodeString("10[a]"));
// Expected output: aaaaaaaaaa

// Test case 5: Triple-digit repetition
console.log("Test Case 5:", decodeString("100[abc]"));
// Expected output: abc repeated 100 times

// Test case 6: Nested encoding with multi-digit repetition
console.log("Test Case 6:", decodeString("2[a10[bc]]"));
// Expected output: abcbcbcbcbcbcbcbcbcbcabc

// Test case 7: Single character with large repetitions
console.log("Test Case 7:", decodeString("99[z]"));
// Expected output: z repeated 99 times

// Test case 8: Complex nested encoding
console.log("Test Case 8:", decodeString("2[2[ab]3[cd]]"));
// Expected output: ababcdcdcdababcdcdcd

// Test case 9: Encoding with letters outside brackets
console.log("Test Case 9:", decodeString("2[xy]ab3[cd]"));
// Expected output: xyxyabcdcdcd

// Test case 10: Very large repetition with a mix of sequences
console.log("Test Case 10:", decodeString("100[a2[b3[c]]]"));
// Expected output: a repeated 100 times, followed by bccbccbcc repeated 100 times