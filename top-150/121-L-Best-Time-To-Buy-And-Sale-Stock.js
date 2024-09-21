console.clear();

var maxProfit = function (prices) {
    let maxProfit = 0;
    let prevPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prevPrice)
            prevPrice = prices[i];

        if (prevPrice < prices[i]) {
            if (prices[i] - prevPrice > maxProfit)
                maxProfit = prices[i] - prevPrice;
        }
    }
    return maxProfit;
};


// Test Case 1
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Expected Output: 5

// Test Case 2
let prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Expected Output: 0

// Test Case 3
let prices3 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices3)); // Expected Output: 4

// Test Case 4
let prices4 = [5, 4, 3, 2, 1];
console.log(maxProfit(prices4)); // Expected Output: 0

// Test Case 5
let prices5 = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(prices5)); // Expected Output: 4

// Test Case 6
let prices6 = [2, 4, 1];
console.log(maxProfit(prices6)); // Expected Output: 2
