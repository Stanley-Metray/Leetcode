
function isIsomorphic(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    if(t.length!==s.length)
        return false;

    for(let i=0; i<s.length; i++)
    {
        if(mapS.has(s[i]) && mapS.get(s[i])!==t[i]
        || mapT.has(t[i]) && mapT.get(t[i])!==s[i])
            return false;
        
        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
    }
    return true;
}

// Test cases

// Test case 1
console.log("1: ",isIsomorphic("egg", "add")); 
// Expected output: true

// Test case 2
console.log("2: ",isIsomorphic("foo", "bar")); 
// Expected output: false

// Test case 3
console.log("3: ",isIsomorphic("paper", "title")); 
// Expected output: true

// Additional test cases

// Test case 4: Both strings are empty
console.log("4: ",isIsomorphic("", "")); 
// Expected output: true

// Test case 5: Single character strings
console.log("5: ",isIsomorphic("a", "b")); 
// Expected output: true

// Test case 6: Same character repeated in s, different characters in t
console.log("6: ",isIsomorphic("aa", "ab")); 
// Expected output: false

// Test case 7: Same character repeated in both s and t
console.log("7: ",isIsomorphic("aa", "cc")); 
// Expected output: true

// Test case 8: Different length strings (invalid case, but to check implementation handling)
console.log("8: ",isIsomorphic("abc", "abcd")); 
// Expected output: false

// Test case 9: Strings with different characters but valid isomorphic mapping
console.log("9: ",isIsomorphic("ab", "xy")); 
// Expected output: true

// Test case 10: Characters mapping to themselves
console.log("10: ",isIsomorphic("abc", "abc")); 
// Expected output: true
