console.clear();

function findMinArrowShots(points) {
    points.sort((a, b) => a[0] - b[0]);

    let maxBalloons = 1;
    let prev = points[0];

    for (let i = 1; i < points.length; i++) {
        let curr = points[i];

        if (curr[0] > prev[1]) {
            maxBalloons++;
            prev = points[i];
        }
        else {
            prev[0] = Math.max(curr[0], prev[0]);
            prev[1] = Math.min(curr[1], prev[1]);
        }
    }
    return maxBalloons;
}

// Test cases

// Test case 1: Multiple overlapping balloons
console.log("Test Case 1:", findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
// Expected output: 2
// Explanation: Two arrows can burst all balloons, at positions x = 6 and x = 11.

// Test case 2: Non-overlapping balloons
console.log("Test Case 2:", findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
// Expected output: 4
// Explanation: Since no balloons overlap, each requires a separate arrow.

// Test case 3: Sequentially overlapping balloons
console.log("Test Case 3:", findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]));
// Expected output: 2
// Explanation: One arrow can burst [1,2] and [2,3], another can burst [3,4] and [4,5].

// Test case 4: Single balloon
console.log("Test Case 4:", findMinArrowShots([[1, 5]]));
// Expected output: 1
// Explanation: Only one balloon, so only one arrow is needed.

// Test case 5: Completely overlapping balloons
console.log("Test Case 5:", findMinArrowShots([[1, 10], [2, 9], [3, 8], [4, 7]]));
// Expected output: 1
// Explanation: All balloons are fully overlapping, so one arrow is enough.

// Test case 6: One balloon with multiple arrows needed (edges just touching)
console.log("Test Case 6:", findMinArrowShots([[1, 5], [6, 10]]));
// Expected output: 2
// Explanation: There is no overlap between the balloons, so each requires its own arrow.

// Test case 7: Some balloons nested within others
console.log("Test Case 7:", findMinArrowShots([[1, 10], [2, 5], [6, 9], [11, 15]]));
// Expected output: 3
// Explanation: One arrow can burst [1,10] and [2,5], another arrow can burst [6,9], and a third arrow is needed for [11,15].

// Test case 8: Multiple arrows required for far apart balloons
console.log("Test Case 8:", findMinArrowShots([[1, 2], [10, 11], [20, 30]]));
// Expected output: 3
// Explanation: Since all balloons are far apart, each one requires its own arrow.

// Test case 9: Balloons with same start but different end points
console.log("Test Case 9:", findMinArrowShots([[1, 2], [1, 3], [1, 4]]));
// Expected output: 1
// Explanation: One arrow can burst all balloons since they all start at the same point.

// Test case 10: Balloons with negative coordinates
console.log("Test Case 10:", findMinArrowShots([[-10, -5], [-8, -3], [-2, 1]]));
// Expected output: 2
// Explanation: One arrow can burst the balloons [-10,-5] and [-8,-3], and another arrow is needed for [-2,1].
