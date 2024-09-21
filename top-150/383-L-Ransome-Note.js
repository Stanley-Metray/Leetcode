console.clear();

function canConstruct(ransomNote, magazine) {
    let map = new Map();

    for (let i = 0; i < magazine.length; i++)
        if (map.has(magazine[i]))
            map.set(magazine[i], map.get(magazine[i]) + 1);
        else
            map.set(magazine[i], 1);

    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i]) || map.has(ransomNote[i]) && map.get(ransomNote[i]) < 1)
            return false;
        else
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }
    return true;
}

// Test cases

// Test case 1
console.log(canConstruct("a", "b"));
// Expected output: false

// Test case 2
console.log(canConstruct("aa", "ab"));
// Expected output: false

// Test case 3
console.log(canConstruct("aa", "aab"));
// Expected output: true

// Additional test cases

// Test case 4: Both strings are empty
console.log(canConstruct("", ""));
// Expected output: true

// Test case 5: ransomNote is empty, magazine is non-empty
console.log(canConstruct("", "abc"));
// Expected output: true

// Test case 6: ransomNote has one letter, magazine has multiple letters including the ransomNote letter
console.log(canConstruct("a", "abc"));
// Expected output: true

// Test case 7: ransomNote has repeated letters, magazine has the same letter but not enough occurrences
console.log(canConstruct("aa", "a"));
// Expected output: false

// Test case 8: ransomNote and magazine are the same string
console.log(canConstruct("abc", "abc"));
// Expected output: true

// Test case 9: ransomNote has letters not present in magazine
console.log(canConstruct("abcd", "abc"));
// Expected output: false

// Test case 10: ransomNote is longer than magazine
console.log(canConstruct("abc", "ab"));
// Expected output: false
