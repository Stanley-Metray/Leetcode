function hIndex(citations) {
    citations.sort((a, b) => b - a);

    let hIndex = 0;

    for (let i = 0; i < citations.length; i++) {
        let citation = citations[i];

        if (i + 1 <= citation)
            hIndex = i + 1;
        else
            break;
    }
    return hIndex;
}

// Test Cases
let citations1 = [3, 0, 6, 1, 5];
let result1 = hIndex(citations1);
console.log(`Test Case 1: ${result1}`);  // Expected Output: 3

let citations2 = [1, 3, 1];
let result2 = hIndex(citations2);
console.log(`Test Case 2: ${result2}`);  // Expected Output: 1

let citations3 = [0, 0, 0, 0];
let result3 = hIndex(citations3);
console.log(`Test Case 3: ${result3}`);  // Expected Output: 0

let citations4 = [10, 8, 5, 4, 3];
let result4 = hIndex(citations4);
console.log(`Test Case 4: ${result4}`);  // Expected Output: 4

let citations5 = [25, 8, 5, 3, 3];
let result5 = hIndex(citations5);
console.log(`Test Case 5: ${result5}`);  // Expected Output: 3

let citations6 = [1];
let result6 = hIndex(citations6);
console.log(`Test Case 6: ${result6}`);  // Expected Output: 1

let citations7 = [100];
let result7 = hIndex(citations7);
console.log(`Test Case 7: ${result7}`);  // Expected Output: 1
