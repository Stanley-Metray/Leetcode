
function isSubsequence(s, t) {
    let index = 0;

    for (let i = 0; i < s.length; i++) {
        while (index < t.length && s[i] !== t[index])
            index++;

        if (index === t.length)
            return false;
        index++;
    }
    return true;
}

// Test cases

// Test case 1
console.log("Test Case 1:", isSubsequence("abc", "ahbgdc"));
// Expected output: true
// Explanation: "abc" is a subsequence of "ahbgdc".

// Test case 2
console.log("Test Case 2:", isSubsequence("axc", "ahbgdc"));
// Expected output: false
// Explanation: "axc" is not a subsequence of "ahbgdc".

// Test case 3: Empty string
console.log("Test Case 3:", isSubsequence("", "ahbgdc"));
// Expected output: true
// Explanation: An empty string is a subsequence of any string.

// Test case 4: Both strings are empty
console.log("Test Case 4:", isSubsequence("", ""));
// Expected output: true
// Explanation: Both strings being empty means the first is trivially a subsequence of the second.

// Test case 5: t is an empty string
console.log("Test Case 5:", isSubsequence("abc", ""));
// Expected output: false
// Explanation: A non-empty string can't be a subsequence of an empty string.

// Test case 6: s is equal to t
console.log("Test Case 6:", isSubsequence("ahbgdc", "ahbgdc"));
// Expected output: true
// Explanation: A string is always a subsequence of itself.

// Test case 7: Characters appear in different order
console.log("Test Case 7:", isSubsequence("bcd", "abcde"));
// Expected output: true
// Explanation: The subsequence "bcd" can be found in "abcde".

// Test case 8: Non-matching characters
console.log("Test Case 8:", isSubsequence("abc", "abxy"));
// Expected output: false
// Explanation: The character "c" from "abc" is not present in "abxy".

// Test case 9: s longer than t
console.log("Test Case 9:", isSubsequence("abcdef", "abc"));
// Expected output: false
// Explanation: The string "abcdef" can't be a subsequence of the shorter string "abc".

// Test case 10: Subsequence with repeated characters
console.log("Test Case 10:", isSubsequence("aaa", "aaabaaa"));
// Expected output: true
// Explanation: The string "aaa" can be found as a subsequence in "aaabaaa".
