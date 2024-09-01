console.clear();

function strStr(haystack, needle) {

    if (needle === "") return 0;
    if (haystack === "") return -1;

    for (let i = 0; i < haystack.length; i++) {
        let k = i, j;

        for (j = 0; j < needle.length; j++) {
            if (needle[j] === haystack[k])
                k++;
            else
                break;
        }

        if (j === needle.length)
            return i;
    }
    return -1;
}

// Test cases

// Test case 1
console.log("Test Case 1:", strStr("sadbutsad", "sad"));
// Expected output: 0
// Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.

// Test case 2
console.log("Test Case 2:", strStr("leetcode", "leeto"));
// Expected output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Test case 3: Needle is an empty string
console.log("Test Case 3:", strStr("hello", ""));
// Expected output: 0
// Explanation: An empty needle is always found at the start of the haystack.

// Test case 4: Haystack is an empty string
console.log("Test Case 4:", strStr("", "a"));
// Expected output: -1
// Explanation: Any non-empty needle in an empty haystack should return -1.

// Test case 5: Both haystack and needle are empty strings
console.log("Test Case 5:", strStr("", ""));
// Expected output: 0
// Explanation: An empty needle in an empty haystack should return 0.

// Test case 6: Needle is longer than haystack
console.log("Test Case 6:", strStr("short", "longerneedle"));
// Expected output: -1
// Explanation: A needle longer than the haystack cannot be found, so return -1.

// Test case 7: Needle is the same as haystack
console.log("Test Case 7:", strStr("exactmatch", "exactmatch"));
// Expected output: 0
// Explanation: The needle is exactly the same as the haystack, so return 0.

// Test case 8: Needle is a single character
console.log("Test Case 8:", strStr("aquickbrownfox", "q"));
// Expected output: 1
// Explanation: The first occurrence of "q" is at index 1.

// Test case 9: Needle occurs at the end of haystack
console.log("Test Case 9:", strStr("findtheend", "end"));
// Expected output: 7
// Explanation: The first occurrence of "end" is at index 7.

// Test case 10: Needle occurs in the middle of haystack
console.log("Test Case 10:", strStr("jumpingjack", "ping"));
// Expected output: 3
// Explanation: The first occurrence of "ping" is at index 3.

