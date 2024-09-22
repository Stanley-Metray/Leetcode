console.clear();

function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    const result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    result[0] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let l = result.length - 1;

        if (intervals[i][0] <= result[l][1]) {
            result[l][0] = Math.min(result[l][0], intervals[i][0]);
            result[l][1] = Math.max(result[l][1], intervals[i][1]);
        }
        else
            result.push(intervals[i]);
    }
    return result;
}

// Test cases

// Test case 1: Basic example with overlapping intervals
console.log("Test Case 1:", mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Expected output: [[1,6], [8,10], [15,18]]

// Test case 2: Consecutive intervals that touch but still overlap
console.log("Test Case 2:", mergeIntervals([[1, 4], [4, 5]]));
// Expected output: [[1,5]]

// Test case 3: No overlapping intervals
console.log("Test Case 3:", mergeIntervals([[1, 2], [3, 4], [5, 6]]));
// Expected output: [[1,2], [3,4], [5,6]]

// Test case 4: All intervals overlap into one large interval
console.log("Test Case 4:", mergeIntervals([[1, 5], [2, 6], [3, 7], [4, 8]]));
// Expected output: [[1,8]]

// Test case 5: Only one interval
console.log("Test Case 5:", mergeIntervals([[1, 3]]));
// Expected output: [[1,3]]

// Test case 6: Large range of intervals with multiple overlaps
console.log("Test Case 6:", mergeIntervals([[1, 3], [2, 4], [5, 7], [6, 8], [9, 10], [10, 12]]));
// Expected output: [[1,4], [5,8], [9,12]]

// Test case 7: Intervals already merged and non-overlapping
console.log("Test Case 7:", mergeIntervals([[1, 5], [6, 10], [11, 15]]));
// Expected output: [[1,5], [6,10], [11,15]]

// Test case 8: All intervals start at the same time
console.log("Test Case 8:", mergeIntervals([[1, 10], [1, 5], [1, 6]]));
// Expected output: [[1,10]]

// Test case 9: Intervals that completely contain other intervals
console.log("Test Case 9:", mergeIntervals([[1, 10], [2, 6], [8, 9]]));
// Expected output: [[1,10]]

// Test case 10: Empty intervals input
console.log("Test Case 10:", mergeIntervals([]));
// Expected output: []
