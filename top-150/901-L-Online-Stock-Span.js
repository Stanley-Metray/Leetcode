// Function signature for StockSpanner class
class StockSpanner {
    constructor() {
        this.stack = [];
    }

    next(price) {
        let day = 1;

        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price){
            day += this.stack.pop()[1];
        }

        this.stack.push([price, day]);

        return day;
    }
}

// Test cases

// Test case 1: Basic consecutive prices increasing
let stockSpanner1 = new StockSpanner();
console.log("Test Case 1:", stockSpanner1.next(100)); // Expected output: 1
console.log("Test Case 1:", stockSpanner1.next(80));  // Expected output: 1
console.log("Test Case 1:", stockSpanner1.next(60));  // Expected output: 1
console.log("Test Case 1:", stockSpanner1.next(70));  // Expected output: 2
console.log("Test Case 1:", stockSpanner1.next(60));  // Expected output: 1
console.log("Test Case 1:", stockSpanner1.next(75));  // Expected output: 4
console.log("Test Case 1:", stockSpanner1.next(85));  // Expected output: 6

console.log('\n\n');

// Test case 2: Prices remain the same
let stockSpanner2 = new StockSpanner();
console.log("Test Case 2:", stockSpanner2.next(50)); // Expected output: 1
console.log("Test Case 2:", stockSpanner2.next(50)); // Expected output: 2
console.log("Test Case 2:", stockSpanner2.next(50)); // Expected output: 3

console.log('\n\n');

// Test case 3: Prices drop every day
let stockSpanner3 = new StockSpanner();
console.log("Test Case 3:", stockSpanner3.next(100)); // Expected output: 1
console.log("Test Case 3:", stockSpanner3.next(90));  // Expected output: 1
console.log("Test Case 3:", stockSpanner3.next(80));  // Expected output: 1
console.log("Test Case 3:", stockSpanner3.next(70));  // Expected output: 1

console.log('\n\n');

// Test case 4: Prices increase every day
let stockSpanner4 = new StockSpanner();
console.log("Test Case 4:", stockSpanner4.next(10));  // Expected output: 1
console.log("Test Case 4:", stockSpanner4.next(20));  // Expected output: 2
console.log("Test Case 4:", stockSpanner4.next(30));  // Expected output: 3
console.log("Test Case 4:", stockSpanner4.next(40));  // Expected output: 4

console.log('\n\n');

// Test case 5: Mixed price changes (increasing and decreasing)
let stockSpanner5 = new StockSpanner();
console.log("Test Case 5:", stockSpanner5.next(15)); // Expected output: 1
console.log("Test Case 5:", stockSpanner5.next(10)); // Expected output: 1
console.log("Test Case 5:", stockSpanner5.next(20)); // Expected output: 3
console.log("Test Case 5:", stockSpanner5.next(25)); // Expected output: 4

console.log('\n\n');

// Test case 6: Large prices and spans
let stockSpanner6 = new StockSpanner();
console.log("Test Case 6:", stockSpanner6.next(1000000)); // Expected output: 1
console.log("Test Case 6:", stockSpanner6.next(500000));  // Expected output: 1
console.log("Test Case 6:", stockSpanner6.next(999999));  // Expected output: 2

console.log('\n\n');

// Test case 7: Very small numbers
let stockSpanner7 = new StockSpanner();
console.log("Test Case 7:", stockSpanner7.next(1));   // Expected output: 1
console.log("Test Case 7:", stockSpanner7.next(1));   // Expected output: 2
console.log("Test Case 7:", stockSpanner7.next(1));   // Expected output: 3

console.log('\n\n');

// Test case 8: Alternating increase and decrease
let stockSpanner8 = new StockSpanner();
console.log("Test Case 8:", stockSpanner8.next(10));  // Expected output: 1
console.log("Test Case 8:", stockSpanner8.next(5));   // Expected output: 1
console.log("Test Case 8:", stockSpanner8.next(15));  // Expected output: 3
console.log("Test Case 8:", stockSpanner8.next(5));   // Expected output: 1

console.log('\n\n');

// Test case 9: Small sequence of increasing and then decreasing prices
let stockSpanner9 = new StockSpanner();
console.log("Test Case 9:", stockSpanner9.next(1));   // Expected output: 1
console.log("Test Case 9:", stockSpanner9.next(2));   // Expected output: 2
console.log("Test Case 9:", stockSpanner9.next(3));   // Expected output: 3
console.log("Test Case 9:", stockSpanner9.next(1));   // Expected output: 1

console.log('\n\n');

// Test case 10: Edge case - all prices are the same
let stockSpanner10 = new StockSpanner();
console.log("Test Case 10:", stockSpanner10.next(100));  // Expected output: 1
console.log("Test Case 10:", stockSpanner10.next(100));  // Expected output: 2
console.log("Test Case 10:", stockSpanner10.next(100));  // Expected output: 3
