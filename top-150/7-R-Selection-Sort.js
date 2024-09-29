console.clear();

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Test cases

// Test case 1: Basic unsorted array
console.log("Test Case 1:", selectionSort([64, 25, 12, 22, 11]));
// Expected output: [11, 12, 22, 25, 64]

// Test case 2: Already sorted array
console.log("Test Case 2:", selectionSort([1, 2, 3, 4, 5]));
// Expected output: [1, 2, 3, 4, 5]

// Test case 3: Reverse sorted array
console.log("Test Case 3:", selectionSort([5, 4, 3, 2, 1]));
// Expected output: [1, 2, 3, 4, 5]

// Test case 4: Array with duplicates
console.log("Test Case 4:", selectionSort([4, 2, 2, 8, 3, 3]));
// Expected output: [2, 2, 3, 3, 4, 8]

// Test case 5: Single element array
console.log("Test Case 5:", selectionSort([42]));
// Expected output: [42]

// Test case 6: Empty array
console.log("Test Case 6:", selectionSort([]));
// Expected output: []

// Test case 7: Array with negative numbers
console.log("Test Case 7:", selectionSort([-3, -1, -7, -5]));
// Expected output: [-7, -5, -3, -1]

// Test case 8: Array with both positive and negative numbers
console.log("Test Case 8:", selectionSort([3, -1, 0, -5, 2]));
// Expected output: [-5, -1, 0, 2, 3]

// Test case 9: Array with floating point numbers
console.log("Test Case 9:", selectionSort([3.1, 2.2, 5.5, 1.3]));
// Expected output: [1.3, 2.2, 3.1, 5.5]

// Test case 10: Large numbers
console.log("Test Case 10:", selectionSort([1000000, 500000, 100000, 999999]));
// Expected output: [100000, 500000, 999999, 1000000]
