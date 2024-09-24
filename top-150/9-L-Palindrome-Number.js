function isPalindrome(x) {
    let n = x;
    let reverse = 0;

    while (n > 0) {
        let y = Math.floor(n % 10);
        reverse = reverse * 10 + y;
        n = Math.floor(n / 10);
    }

    return reverse === x;
}

// Test cases

// Test case 1: Positive palindrome
console.log("1: ", isPalindrome(121));
// Expected output: true

// Test case 2: Negative number
console.log("2: ", isPalindrome(-121));
// Expected output: false

// Test case 3: Non-palindrome number
console.log("3: ", isPalindrome(10));
// Expected output: false

// Test case 4: Single-digit palindrome
console.log("4: ", isPalindrome(7));
// Expected output: true

// Test case 5: Palindrome with even number of digits
console.log("5: ", isPalindrome(1221));
// Expected output: true

// Test case 6: Non-palindrome with even number of digits
console.log("6: ", isPalindrome(1234));
// Expected output: false

// Test case 7: Larger palindrome
console.log("7: ", isPalindrome(12321));
// Expected output: true

// Test case 8: Larger non-palindrome
console.log("8: ", isPalindrome(123456));
// Expected output: false

// Test case 9: Edge case with zero
console.log("9: ", isPalindrome(0));
// Expected output: true

// Test case 10: Another negative case
console.log("10: ", isPalindrome(-101));
// Expected output: false
