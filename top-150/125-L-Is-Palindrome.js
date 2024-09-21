console.clear();

function isPalindrome(s) {
    s = s.toLowerCase();
    s2 = '';
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);

        if (code >= 97 && code <= 122 || code >= 48 && code <= 57)
            s2 += s[i];
    }

    for (let i = 0; i < Math.floor(s2.length / 2); i++) {
        if (s2[i] !== s2[s2.length - i - 1])
            return false;
    }
    return true;
}

// Test cases

// Test case 1
console.log("Test Case 1:", isPalindrome("A man, a plan, a canal: Panama"));
// Expected output: true
// Explanation: After removing non-alphanumeric characters and converting to lowercase, "amanaplanacanalpanama" is a palindrome.

// Test case 2
console.log("Test Case 2:", isPalindrome("race a car"));
// Expected output: false
// Explanation: After removing non-alphanumeric characters, "raceacar" is not a palindrome.

// Test case 3: Empty string
console.log("Test Case 3:", isPalindrome(" "));
// Expected output: true
// Explanation: An empty string (after removing non-alphanumeric characters) is considered a palindrome.

// Test case 4: Single character
console.log("Test Case 4:", isPalindrome("a"));
// Expected output: true
// Explanation: A single character is always a palindrome.

// Test case 5: String with special characters
console.log("Test Case 5:", isPalindrome(".,"));
// Expected output: true
// Explanation: After removing non-alphanumeric characters, the string becomes empty, which is a palindrome.

// Test case 6: Mixed-case letters
console.log("Test Case 6:", isPalindrome("No 'x' in Nixon"));
// Expected output: true
// Explanation: After cleaning, the string "noxinnixon" is a palindrome.

// Test case 7: String with numbers
console.log("Test Case 7:", isPalindrome("12321"));
// Expected output: true
// Explanation: The string "12321" reads the same forward and backward, so it is a palindrome.

// Test case 8: String with uppercase and lowercase letters
console.log("Test Case 8:", isPalindrome("Madam"));
// Expected output: true
// Explanation: The string "madam" is a palindrome regardless of case.

// Test case 9: Palindrome with spaces
console.log("Test Case 9:", isPalindrome("Was it a car or a cat I saw"));
// Expected output: true
// Explanation: After removing spaces and non-alphanumeric characters, "wasitacaroracatisaw" is a palindrome.

// Test case 10: Non-palindrome string
console.log("Test Case 10:", isPalindrome("palindrome"));
// Expected output: false
// Explanation: The string "palindrome" does not read the same forward and backward.
