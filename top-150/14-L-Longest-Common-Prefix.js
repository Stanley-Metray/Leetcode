console.clear();

function longestCommonPrefix(strs) {

    if (strs.length === 0) return "";

    strs = Array.from(strs).sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let length = first.length < last.length ? first.length : last.length;
    let res = '';
    for (let i = 0; i < length; i++) {
        if (first[i] === last[i])
            res += first[i];
        else
            break;
    }

    return res;
}

// Test cases

// Test case 1
console.log("Test Case 1:", longestCommonPrefix(["flower", "flow", "flight"]));
// Expected output: "fl"
// Explanation: The common prefix between "flower", "flow", and "flight" is "fl".

// Test case 2
console.log("Test Case 2:", longestCommonPrefix(["dog", "racecar", "car"]));
// Expected output: ""
// Explanation: There is no common prefix among "dog", "racecar", and "car".

// Test case 3: All strings are identical
console.log("Test Case 3:", longestCommonPrefix(["test", "test", "test"]));
// Expected output: "test"
// Explanation: All strings are the same, so the common prefix is the entire string "test".

// Test case 4: Some strings are empty
console.log("Test Case 4:", longestCommonPrefix(["", "b", "c"]));
// Expected output: ""
// Explanation: An empty string among the inputs results in no common prefix.


// Test case 5: Only one string
console.log("Test Case 5:", longestCommonPrefix(["onlyone"]));
// Expected output: "onlyone"
// Explanation: If there's only one string, the entire string is the prefix.

// Test case 6: No common prefix
console.log("Test Case 6:", longestCommonPrefix(["apple", "banana", "grape"]));
// Expected output: ""
// Explanation: These words share no common starting letters.

// Test case 7: Common prefix with varying lengths
console.log("Test Case 7:", longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
// Expected output: "inters"
// Explanation: The common prefix is "inters" across all the words.

// Test case 8: Single letter strings
console.log("Test Case 8:", longestCommonPrefix(["a", "a", "a"]));
// Expected output: "a"
// Explanation: All strings are identical single letters, so the common prefix is "a".

// Test case 9: No input strings
console.log("Test Case 9:", longestCommonPrefix([]));
// Expected output: ""
// Explanation: No strings provided, so no common prefix can be found.

// Test case 10: Partial common prefix
console.log("Test Case 10:", longestCommonPrefix(["tech", "team", "teal"]));
// Expected output: "te"
// Explanation: The longest common prefix between "tech", "team", and "teal" is "te".
