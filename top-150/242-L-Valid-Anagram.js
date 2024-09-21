
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;

    let mapS = new Map();

    for (let i = 0; i < s.length; i++)
        if (mapS.has(s[i]))
            mapS.set(s[i], mapS.get(s[i]) + 1);
        else
            mapS.set(s[i], 1);

    for (let i = 0; i < t.length; i++)
        if (!mapS.has(t[i]) || mapS.has(t[i]) && mapS.get(t[i]) < 1)
            return false;
        else
            mapS.set(t[i], mapS.get(t[i]) - 1);

    return true;
}

// Test cases

// Test case 1
console.log("Test Case 1:", isAnagram("anagram", "nagaram"));
// Expected output: true

// Test case 2
console.log("Test Case 2:", isAnagram("rat", "car"));
// Expected output: false

// Additional test cases

// Test case 3: Both strings are empty
console.log("Test Case 3:", isAnagram("", ""));
// Expected output: true

// Test case 4: One string is empty
console.log("Test Case 4:", isAnagram("a", ""));
// Expected output: false

// Test case 5: Strings with different lengths
console.log("Test Case 5:", isAnagram("abcd", "abc"));
// Expected output: false

// Test case 6: Strings with same letters but different frequencies
console.log("Test Case 6:", isAnagram("aabbcc", "abcabc"));
// Expected output: true

// Test case 7: Strings with same characters but different arrangement
console.log("Test Case 7:", isAnagram("listen", "silent"));
// Expected output: true

// Test case 8: Strings that are identical
console.log("Test Case 8:", isAnagram("abc", "abc"));
// Expected output: true

// Test case 9: Strings with uppercase and lowercase letters
console.log("Test Case 9:", isAnagram("Astronomer", "Moon starer"));
// Expected output: false

// Test case 10: Strings with special characters
console.log("Test Case 10:", isAnagram("a!b@c", "c@b!a"));
// Expected output: true
