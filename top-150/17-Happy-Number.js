function isHappy(n) {
    let set = new Set();
    let x = n;
    while(true)
    {
        let sum = 0;
        while(x!==0)
        {
            let y = Math.floor(x%10);
            sum += y*y;
            x = Math.floor(x/10);
        }
        if(sum===1)
            return true;

        if(set.has(sum))
            return false;
        else
            set.add(sum);
        x = sum;
    }
}

// Test cases

// Test case 1
console.log("Test Case 1:", isHappy(19)); 
// Expected output: true
// Explanation: 1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1

// Test case 2
console.log("Test Case 2:", isHappy(2)); 
// Expected output: false
// Explanation: The process results in a cycle: 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 -> ...

// Test case 3
console.log("Test Case 3:", isHappy(7)); 
// Expected output: true
// Explanation: 7^2 = 49, 4^2 + 9^2 = 97, 9^2 + 7^2 = 130, 1^2 + 3^2 + 0^2 = 10, 1^2 + 0^2 = 1

// Additional test cases

// Test case 4: Single-digit happy number
console.log("Test Case 4:", isHappy(1)); 
// Expected output: true
// Explanation: 1 is a happy number by definition.

// Test case 5: Single-digit unhappy number
console.log("Test Case 5:", isHappy(3)); 
// Expected output: false
// Explanation: 3 -> 9 -> 81 -> 65 -> 61 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 -> ...

// Test case 6: Larger number that is happy
console.log("Test Case 6:", isHappy(100)); 
// Expected output: true
// Explanation: 1^2 + 0^2 + 0^2 = 1

// Test case 7: Larger number that is unhappy
console.log("Test Case 7:", isHappy(20)); 
// Expected output: false
// Explanation: 2^2 + 0^2 = 4, and then it enters a loop that doesn't include 1.

// Test case 8: Two-digit happy number
console.log("Test Case 8:", isHappy(10)); 
// Expected output: true
// Explanation: 1^2 + 0^2 = 1

// Test case 9: Two-digit unhappy number
console.log("Test Case 9:", isHappy(21)); 
// Expected output: false
// Explanation: 2^2 + 1^2 = 5 -> 25 -> 29 -> 85 -> 89 -> 145 -> 42 -> 20 -> ...

// Test case 10: Number that quickly enters a loop
console.log("Test Case 10:", isHappy(4)); 
// Expected output: false
// Explanation: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 -> ...
