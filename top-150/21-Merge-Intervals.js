console.clear();
function mergeIntervals(intervals) {
    if(intervals.length<2)
        return intervals;
    intervals = intervals.sort((a,b)=> a[0]-b[0]);
    let result = [intervals[0]];
    for(let i=1; i<intervals.length; i++)
    {
        let l = result.length-1;
        if(result[l][1]>=intervals[i][0])
        {
            result[l][0] = Math.min(result[l][0], intervals[i][0]);
            result[l][1] = Math.max(result[l][1], intervals[i][1]);
        }
        else
            result.push(intervals[i]);
    }

    return result
}

// Test cases

// Test case 1
console.log("Test Case 1:", mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Expected output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals [1, 3] and [2, 6] overlap, merge them into [1, 6].

// Test case 2
console.log("Test Case 2:", mergeIntervals([[1, 4], [4, 5]]));
// Expected output: [[1, 5]]
// Explanation: Intervals [1, 4] and [4, 5] are considered overlapping and merge into [1, 5].

// Test case 3: No overlapping intervals
console.log("Test Case 3:", mergeIntervals([[1, 2], [3, 4], [5, 6]]));
// Expected output: [[1, 2], [3, 4], [5, 6]]
// Explanation: No intervals overlap, so the output is the same as the input.

// Test case 4: All intervals overlap into one
console.log("Test Case 4:", mergeIntervals([[1, 10], [2, 6], [8, 10]]));
// Expected output: [[1, 10]]
// Explanation: All intervals overlap, so they merge into one large interval [1, 10].

// Test case 5: Single interval
console.log("Test Case 5:", mergeIntervals([[1, 4]]));
// Expected output: [[1, 4]]
// Explanation: Only one interval, so no merging is required.

// Test case 6: Intervals that are adjacent but not overlapping
console.log("Test Case 6:", mergeIntervals([[1, 2], [3, 4], [5, 7], [7, 8]]));
// Expected output: [[1, 2], [3, 4], [5, 8]]
// Explanation: The intervals [5, 7] and [7, 8] are adjacent and merge into [5, 8].

// Test case 7: Completely contained intervals
console.log("Test Case 7:", mergeIntervals([[1, 10], [2, 5], [6, 8]]));
// Expected output: [[1, 10]]
// Explanation: All other intervals are contained within [1, 10], so they merge into [1, 10].

// Test case 8: Non-overlapping but unordered intervals
console.log("Test Case 8:", mergeIntervals([[10, 20], [1, 2], [30, 40], [5, 6]]));
// Expected output: [[1, 2], [5, 6], [10, 20], [30, 40]]
// Explanation: The intervals do not overlap but are unordered. The result should be ordered non-overlapping intervals.

// Test case 9: Empty input
console.log("Test Case 9:", mergeIntervals([]));
// Expected output: []
// Explanation: No intervals to merge, so the output is an empty array.

// Test case 10: Large interval that encompasses smaller intervals
console.log("Test Case 10:", mergeIntervals([[1, 100], [20, 30], [40, 50], [60, 70], [80, 90]]));
// Expected output: [[1, 100]]
// Explanation: The large interval [1, 100] encompasses all the smaller intervals, so they merge into [1, 100].
