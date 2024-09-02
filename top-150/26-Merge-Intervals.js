console.clear();

function mergeIntervals(intervals) {
    
    intervals = intervals.sort((a,b)=> a[0]-b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let l = result.length - 1;

        if (result[l][1] >= intervals[i][0]) {
            result[l][0] = Math.min(intervals[i][0], result[l][0]);
            result[l][1] = Math.max(intervals[i][1], result[l][1]);
        }
        else
            result.push(intervals[i]);
    }

    return result;
}

// Test cases

// Test case 1
console.log("Test Case 1:", mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Expected output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Test case 2
console.log("Test Case 2:", mergeIntervals([[1, 4], [4, 5]]));
// Expected output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Test case 3: Non-overlapping intervals
console.log("Test Case 3:", mergeIntervals([[1, 2], [3, 4], [5, 6]]));
// Expected output: [[1,2],[3,4],[5,6]]
// Explanation: All intervals are non-overlapping, so they remain as they are.

// Test case 4: All intervals are the same
console.log("Test Case 4:", mergeIntervals([[2, 3], [2, 3], [2, 3]]));
// Expected output: [[2,3]]
// Explanation: Since all intervals are identical, they merge into one interval [2,3].

// Test case 5: Completely overlapping intervals
console.log("Test Case 5:", mergeIntervals([[1, 10], [2, 6], [8, 10]]));
// Expected output: [[1,10]]
// Explanation: All intervals overlap with the first interval [1,10], so they merge into [1,10].

// Test case 6: Intervals with single elements
console.log("Test Case 6:", mergeIntervals([[5, 5], [1, 1], [2, 2]]));
// Expected output: [[1,1],[2,2],[5,5]]
// Explanation: Intervals with single elements do not overlap and remain separate.

// Test case 7: Intervals with negative numbers
console.log("Test Case 7:", mergeIntervals([[-10, -7], [-6, -3], [-5, -1]]));
// Expected output: [[-10,-7],[-6,-1]]
// Explanation: Intervals [-6,-3] and [-5,-1] overlap and merge into [-6,-1].

// Test case 8: Intervals with gaps
console.log("Test Case 8:", mergeIntervals([[1, 2], [3, 5], [6, 7], [8, 10]]));
// Expected output: [[1,2],[3,5],[6,7],[8,10]]
// Explanation: There are no overlapping intervals, so the intervals remain as they are.

// Test case 9: Large intervals covering smaller ones
console.log("Test Case 9:", mergeIntervals([[1, 10], [2, 3], [4, 8], [9, 10]]));
// Expected output: [[1,10]]
// Explanation: The large interval [1,10] covers all the smaller intervals, so they merge into [1,10].

// Test case 10: Intervals with equal start and end
console.log("Test Case 10:", mergeIntervals([[1, 1], [2, 2], [3, 3]]));
// Expected output: [[1,1],[2,2],[3,3]]
// Explanation: Intervals with equal start and end points do not overlap and remain separate.
