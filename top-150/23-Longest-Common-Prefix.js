console.clear();

function longestCommonPrefix(strs) {
    
    let prefix = strs[0];
    
    for(let i=1; i<strs.length; i++)
    {
        let compareString = strs[i];
        let temp = "";

        for(let j=0; j<compareString.length; j++)
        {
            if(compareString[j]===prefix[j])
                temp += compareString[j];
            else
                break;
        }

        if(temp.length<prefix.length)
            prefix = temp;
        else
            prefix = temp;
    }

    if(prefix)
        return prefix;
    else
        return "";
}

// Test cases

// Test case 1
console.log("Test Case 1:", longestCommonPrefix(["flower", "flow", "flight"]));
// Expected output: "fl"
// Explanation: The longest common prefix is "fl".

// Test case 2
console.log("Test Case 2:", longestCommonPrefix(["dog", "racecar", "car"]));
// Expected output: ""
// Explanation: There is no common prefix among the input strings.

// Test case 3: Single word in the array
console.log("Test Case 3:", longestCommonPrefix(["single"]));
// Expected output: "single"
// Explanation: With only one string, the longest common prefix is the string itself.

// Test case 4: All strings are the same
console.log("Test Case 4:", longestCommonPrefix(["test", "test", "test"]));
// Expected output: "test"
// Explanation: Since all strings are identical, the longest common prefix is the string itself.

// Test case 5: No common prefix
console.log("Test Case 5:", longestCommonPrefix(["apple", "banana", "cherry"]));
// Expected output: ""
// Explanation: There is no common prefix among the input strings.

// Test case 6: Strings with common prefix but varying lengths
console.log("Test Case 6:", longestCommonPrefix(["interview", "intermediate", "internal", "internet"]));
// Expected output: "inter"
// Explanation: The longest common prefix is "inter".

// Test case 7: Empty array
console.log("Test Case 7:", longestCommonPrefix([]));
// Expected output: ""
// Explanation: An empty array has no common prefix, so the output is an empty string.

// Test case 8: Array with empty strings
console.log("Test Case 8:", longestCommonPrefix(["", "", ""]));
// Expected output: ""
// Explanation: All strings are empty, so the longest common prefix is an empty string.

// Test case 9: Array with one string being an empty string
console.log("Test Case 9:", longestCommonPrefix(["prefix", "", "pre"]));
// Expected output: ""
// Explanation: Since one string is empty, the common prefix is also an empty string.

// Test case 10: Long strings with a short common prefix
console.log("Test Case 10:", longestCommonPrefix(["abcdefgh", "abcdeghijkl", "abcdefghi"]));
// Expected output: "abcde"
// Explanation: The longest common prefix is "abcde".
