console.clear();

function wordPattern(pattern, s) {
    let mapP = new Map();
    let mapS = new Map();

    s = s.split(' ');

    if (s.length !== pattern.length)
        return false;

    for (let i = 0; i < pattern.length; i++) {
        if (mapP.has(pattern[i]) && mapP.get(pattern[i]) !== s[i]
            || mapS.has(s[i]) && mapS.get(s[i]) !== pattern[i])
            return false;
        mapP.set(pattern[i], s[i]);
        mapS.set(s[i], pattern[i]);
    }
    return true;
}

// Test cases

// Test case 1
console.log("Test Case 1:", wordPattern("abba", "dog cat cat dog"));
// Expected output: true

// Test case 2
console.log("Test Case 2:", wordPattern("abba", "dog cat cat fish"));
// Expected output: false

// Test case 3
console.log("Test Case 3:", wordPattern("aaaa", "dog cat cat dog"));
// Expected output: false

// Additional test cases

// Test case 4
console.log("Test Case 4:", wordPattern("a", "dog"));
// Expected output: true

// Test case 5
console.log("Test Case 5:", wordPattern("ab", "dog"));
// Expected output: false

// Test case 6
console.log("Test Case 6:", wordPattern("aaaa", "dog dog dog dog"));
// Expected output: true

// Test case 7
console.log("Test Case 7:", wordPattern("aaaa", "dog cat cat dog"));
// Expected output: false

// Test case 8
console.log("Test Case 8:", wordPattern("ab", "dog dog"));
// Expected output: false

// Test case 9
console.log("Test Case 9:", wordPattern("abcd", "dog cat fish bird"));
// Expected output: true

// Test case 10
console.log("Test Case 10:", wordPattern("abba", "dog dog dog dog"));
// Expected output: false
