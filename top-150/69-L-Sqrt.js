console.clear();

function mySqrt(x) {
    let low = 1;
    let high = x;
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let sqrt = mid * mid;

        if (sqrt === x)
            return mid;
        else if (sqrt < x) {
            result = mid;
            low = mid + 1;
        }
        else
            high = mid - 1;
    }
    return result;
}

// Test cases

// Test case 1: Perfect square
console.log("1: ", mySqrt(4));
// Expected output: 2

// Test case 2: Non-perfect square
console.log("2: ", mySqrt(8));
// Expected output: 2

// Test case 3: Zero input
console.log("3: ", mySqrt(0));
// Expected output: 0

// Test case 4: One input
console.log("4: ", mySqrt(1));
// Expected output: 1

// Test case 5: Large perfect square
console.log("5: ", mySqrt(10000));
// Expected output: 100

// Test case 6: Large non-perfect square
console.log("6: ", mySqrt(9999));
// Expected output: 99

// Test case 7: Large input
console.log("7: ", mySqrt(2147395600));
// Expected output: 46340 (since 46340^2 = 2147395600)

// Test case 8: Input just below a perfect square
console.log("8: ", mySqrt(15));
// Expected output: 3 (since sqrt(15) ≈ 3.87298)

// Test case 9: Input just above a perfect square
console.log("9: ", mySqrt(16));
// Expected output: 4

// Test case 10: Another non-perfect square
console.log("10: ", mySqrt(24));
// Expected output: 4 (since sqrt(24) ≈ 4.89898)
