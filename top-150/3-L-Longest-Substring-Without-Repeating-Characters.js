console.clear();

function lengthOfLongestSubstring(s) {
    let set = new Set();

    let left = 0;
    let right = 0;
    let max = 0;

    while(right<s.length)
    {
        while(set.has(s[right]))
        {
            set.delete(s[left]);
            left++
        }

        set.add(s[right]);
        max = Math.max(max, (right-left+1));
        right++;
    }
    return max;
}

// Test Case 1: Standard case with repeating characters
let s = "abcabcbb";
console.log("Test Case 1:", lengthOfLongestSubstring(s)); // Expected Output: 3 (substring: "abc")

// Test Case 2: String with all identical characters
s = "bbbbb";
console.log("Test Case 2:", lengthOfLongestSubstring(s)); // Expected Output: 1 (substring: "b")

// Test Case 3: String with repeating and non-repeating characters
s = "pwwkew";
console.log("Test Case 3:", lengthOfLongestSubstring(s)); // Expected Output: 3 (substring: "wke")

// Test Case 4: String with all unique characters
s = "abcdef";
console.log("Test Case 4:", lengthOfLongestSubstring(s)); // Expected Output: 6 (substring: "abcdef")

// Test Case 5: Empty string
s = "";
console.log("Test Case 5:", lengthOfLongestSubstring(s)); // Expected Output: 0

// Test Case 6: String with one character
s = "a";
console.log("Test Case 6:", lengthOfLongestSubstring(s)); // Expected Output: 1

// Test Case 7: String with alternating characters
s = "abababab";
console.log("Test Case 7:", lengthOfLongestSubstring(s)); // Expected Output: 2 (substring: "ab")

// Test Case 8: Long string with mixed repeating and non-repeating characters
s = "abcdabcdeabcdabcde";
console.log("Test Case 8:", lengthOfLongestSubstring(s)); // Expected Output: 5 (substring: "abcde")

// Test Case 9: String with special characters and spaces
s = "abc def!@#";
console.log("Test Case 9:", lengthOfLongestSubstring(s)); // Expected Output: 10 (substring: "abc def!@#")

// Test Case 10: String with mixed case letters
s = "aAaAaA";
console.log("Test Case 10:", lengthOfLongestSubstring(s)); // Expected Output: 2 (substring: "aA")
