console.clear();

function trailingZeroes(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

// Test cases

// Test case 1: Input with no trailing zeroes
console.log("1: ", trailingZeroes(3));
// Expected output: 0

// Test case 2: Input with one trailing zero
console.log("2: ", trailingZeroes(5));
// Expected output: 1

// Test case 3: Input of zero
console.log("3: ", trailingZeroes(0));
// Expected output: 0

// Test case 4: Input with multiple trailing zeroes
console.log("4: ", trailingZeroes(10));
// Expected output: 2 (since 10! = 3628800)

// Test case 5: Larger input with trailing zeroes
console.log("5: ", trailingZeroes(25));
// Expected output: 6 (since 25! has 6 trailing zeroes)

// Test case 6: Larger input
console.log("6: ", trailingZeroes(50));
// Expected output: 12 (since 50! has 12 trailing zeroes)

// Test case 7: Larger input
console.log("7: ", trailingZeroes(100));
// Expected output: 24 (since 100! has 24 trailing zeroes)

// Test case 8: Another larger input
console.log("8: ", trailingZeroes(200));
// Expected output: 49 (since 200! has 49 trailing zeroes)

// Test case 9: Edge case
console.log("9: ", trailingZeroes(1));
// Expected output: 0

// Test case 10: Edge case
console.log("10: ", trailingZeroes(4));
// Expected output: 0
