console.clear();

function reverseWords(s) {
    let words = s.split(' ');

    words = words.filter(val => {
        return val.trim() !== "";
    });

    let reverseWords = words.reverse().join(' ');

    return reverseWords;
}

// Test cases

// Test case 1
console.log("Test Case 1:", reverseWords("the sky is blue"));
// Expected output: "blue is sky the"
// Explanation: The words in the string are reversed, with single spaces between them.

// Test case 2
console.log("Test Case 2:", reverseWords("  hello world  "));
// Expected output: "world hello"
// Explanation: The reversed string should not contain leading or trailing spaces.

// Test case 3: Multiple spaces between words
console.log("Test Case 3:", reverseWords("a good   example"));
// Expected output: "example good a"
// Explanation: Multiple spaces between words should be reduced to a single space in the reversed string.

// Test case 4: Single word with spaces
console.log("Test Case 4:", reverseWords("   single   "));
// Expected output: "single"
// Explanation: The input has a single word surrounded by spaces, which should be trimmed in the output.

// Test case 5: Empty string
console.log("Test Case 5:", reverseWords(""));
// Expected output: ""
// Explanation: An empty string should return an empty string.

// Test case 6: String with only spaces
console.log("Test Case 6:", reverseWords("     "));
// Expected output: ""
// Explanation: A string with only spaces should return an empty string.

// Test case 7: Multiple words with leading, trailing, and in-between spaces
console.log("Test Case 7:", reverseWords("  this   is a test  "));
// Expected output: "test a is this"
// Explanation: The string should be reversed with no leading or trailing spaces and a single space between each word.

// Test case 8: No extra spaces, words reversed
console.log("Test Case 8:", reverseWords("reverse these words"));
// Expected output: "words these reverse"
// Explanation: The string should be reversed as expected.

// Test case 9: All words are single characters
console.log("Test Case 9:", reverseWords("a b c d e"));
// Expected output: "e d c b a"
// Explanation: The words are reversed in the output string.

// Test case 10: Very long string
console.log("Test Case 10:", reverseWords("long test case with a lot of words in it to check performance"));
// Expected output: "performance check to it in words of lot a with case test long"
// Explanation: The words in the long string are reversed, maintaining the order and reducing any extra spaces.
