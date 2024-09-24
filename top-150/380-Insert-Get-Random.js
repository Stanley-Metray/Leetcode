console.clear();

class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.nums = new Array();
    }

    insert(val) {

        if (this.map.has(val))
            return false;

        this.nums.push(val);
        this.map.set(val, this.nums.length - 1);

        return true;
    }

    remove(val) {

        if (!this.map.has(val))
            return false;

        let index = this.map.get(val);
        let lastIndex = this.nums.length - 1;

        // Swapping last element with the removing element
        let temp = this.nums[index];
        this.nums[index] = this.nums[lastIndex];
        this.nums[lastIndex] = temp;

        // removing element from array and from map 
        this.map.delete(val);
        this.nums.pop();

        // updating swapped element index 

        this.map.set(this.nums[index], index);

        return true;
    }

    getRandom() {
        let index = Math.floor(Math.random() * this.nums.length);

        return this.nums[index];
    }
}

// Test cases

const randomizedSet = new RandomizedSet();

// Test case 1: Inserting a value
console.log("1: ", randomizedSet.insert(1));
// Expected output: true

// Test case 2: Removing a value that doesn't exist
console.log("2: ", randomizedSet.remove(2));
// Expected output: false

// Test case 3: Inserting another value
console.log("3: ", randomizedSet.insert(2));
// Expected output: true

// Test case 4: Getting a random value (should return either 1 or 2)
console.log("4: ", randomizedSet.getRandom());
// Expected output: 1 or 2

// Test case 5: Removing a value that exists
console.log("5: ", randomizedSet.remove(1));
// Expected output: true

// Test case 6: Inserting a value that already exists
console.log("6: ", randomizedSet.insert(2));
// Expected output: false

// Test case 7: Getting a random value (should return 2)
console.log("7: ", randomizedSet.getRandom());
// Expected output: 2

// Test case 8: Inserting a new value
console.log("8: ", randomizedSet.insert(3));
// Expected output: true

// Test case 9: Getting a random value (should return either 2 or 3)
console.log("9: ", randomizedSet.getRandom());
// Expected output: 2 or 3

// Test case 10: Removing a value that exists
console.log("10: ", randomizedSet.remove(2));
// Expected output: true
