function lengthOfLastWord(s) {
    let arr = s.split(' ');
    
    arr = arr.filter((val)=>{
        if(val.trim()!==" ")
            return val;
        else
            return;
    });

    let lastWord = arr[arr.length-1];
    return lastWord.length;
}

// Test cases

// Test case 1
console.log("Test Case 1:", lengthOfLastWord("Hello World"));
// Expected output: 5
// Explanation: The last word is "World" with length 5.

// Test case 2
console.log("Test Case 2:", lengthOfLastWord("   fly me   to   the moon  "));
// Expected output: 4
// Explanation: The last word is "moon" with length 4.

// Test case 3
console.log("Test Case 3:", lengthOfLastWord("luffy is still joyboy"));
// Expected output: 6
// Explanation: The last word is "joyboy" with length 6.

// Test case 4: Single word with spaces around
console.log("Test Case 4:", lengthOfLastWord("   hello   "));
// Expected output: 5
// Explanation: The last word is "hello" with length 5.

// Test case 5: String with no spaces
console.log("Test Case 5:", lengthOfLastWord("hello"));
// Expected output: 5
// Explanation: The last word is "hello" with length 5, since it's the only word.

// Test case 6: Multiple spaces at the end
console.log("Test Case 6:", lengthOfLastWord("a "));
// Expected output: 1
// Explanation: The last word is "a" with length 1, even though there is a space after it.

// Test case 7: String with a single space between words
console.log("Test Case 7:", lengthOfLastWord("fly me to the moon"));
// Expected output: 4
// Explanation: The last word is "moon" with length 4.

// Test case 8: String that ends with multiple spaces
console.log("Test Case 8:", lengthOfLastWord("luffy is still joyboy   "));
// Expected output: 6
// Explanation: The last word is "joyboy" with length 6, ignoring trailing spaces.

// Test case 9: String with all spaces and a single word at the end
console.log("Test Case 9:", lengthOfLastWord("         hi"));
// Expected output: 2
// Explanation: The last word is "hi" with length 2, after ignoring leading spaces.

// Test case 10: Very long string with many spaces
console.log("Test Case 10:", lengthOfLastWord("a".repeat(10000) + " " + "b".repeat(5000)));
// Expected output: 5000
// Explanation: The last word is a very long word made up of 5000 'b' characters.
