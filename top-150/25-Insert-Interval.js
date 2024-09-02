function insertInterval(intervals, newInterval) {
    let i = 0;
    let result = [];

    while(i<intervals.length && intervals[i][1]<newInterval[0])
    {
        result.push(intervals[i]);
        i++;
    }

    while(i<intervals.length && intervals[i][0]<=newInterval[1])
    {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    result.push(newInterval);

    while(i<intervals.length)
    {
        result.push(intervals[i]);
        i++;
    }

    return result;
}


// Test cases

// Test case 1: Basic case with overlapping intervals
console.log("Test Case 1:", insertInterval([[1, 3], [6, 9]], [2, 5]));
// Expected output: [[1, 5], [6, 9]]
// Explanation: The new interval [2, 5] overlaps with [1, 3], so they are merged into [1, 5].

// Test case 2: Merging multiple intervals
console.log("Test Case 2:", insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// Expected output: [[1, 2], [3, 10], [12, 16]]
// Explanation: The new interval [4, 8] overlaps with [3, 5], [6, 7], and [8, 10], so they are merged into [3, 10].

// Test case 3: No overlap with any interval, insert in the middle
console.log("Test Case 3:", insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [7, 8]));
// Expected output: [[1, 2], [3, 5], [6, 10], [12, 16]]
// Explanation: The new interval [7, 8] overlaps with [6, 7] and [8, 10], so they are merged into [6, 10].

// Test case 4: New interval does not overlap, added at the end
console.log("Test Case 4:", insertInterval([[1, 3], [6, 9]], [10, 11]));
// Expected output: [[1, 3], [6, 9], [10, 11]]
// Explanation: The new interval [10, 11] does not overlap with any existing intervals, so it is added at the end.

// Test case 5: New interval does not overlap, added at the beginning
console.log("Test Case 5:", insertInterval([[4, 5], [6, 9]], [1, 3]));
// Expected output: [[1, 3], [4, 5], [6, 9]]
// Explanation: The new interval [1, 3] does not overlap with any existing intervals, so it is added at the beginning.

// Test case 6: New interval merges all existing intervals
console.log("Test Case 6:", insertInterval([[2, 3], [4, 5], [6, 7], [8, 9]], [1, 10]));
// Expected output: [[1, 10]]
// Explanation: The new interval [1, 10] overlaps with all existing intervals, so they are all merged into one interval [1, 10].

// Test case 7: Empty intervals array
console.log("Test Case 7:", insertInterval([], [1, 5]));
// Expected output: [[1, 5]]
// Explanation: The intervals array is empty, so the new interval [1, 5] is the only interval.

// Test case 8: New interval equal to an existing interval
console.log("Test Case 8:", insertInterval([[1, 3], [4, 6]], [1, 3]));
// Expected output: [[1, 3], [4, 6]]
// Explanation: The new interval [1, 3] is exactly the same as an existing interval, so no change is made.

// Test case 9: New interval within an existing interval
console.log("Test Case 9:", insertInterval([[1, 10]], [3, 5]));
// Expected output: [[1, 10]]
// Explanation: The new interval [3, 5] is within the existing interval [1, 10], so no change is made.

// Test case 10: Single interval in list, new interval overlaps partially
console.log("Test Case 10:", insertInterval([[5, 7]], [6, 8]));
// Expected output: [[5, 8]]
// Explanation: The new interval [6, 8] overlaps with [5, 7], so they are merged into [5, 8].