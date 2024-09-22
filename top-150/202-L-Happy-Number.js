console.clear();

function isHappy(n) {
    let set = new Set();

    while (true) {
        let sum = 0;
        while (n > 0) {
            let y = Math.floor(n % 10);
            sum = sum + (y*y);
            n = Math.floor(n / 10);
        }

        if (sum === 1)
            return true;

        if(set.has(sum))
            return false;
        else
            set.add(sum);
        n = sum;
    }
}

// Test cases

console.log('Test case 1', isHappy(19));
// Expected output: true

console.log('Test case 2', isHappy(2));
// Expected output: false

console.log('Test case 3', isHappy(7));
// Expected output: true

console.log('Test case 4', isHappy(4));
// Expected output: false

console.log('Test case 5', isHappy(1));
// Expected output: true

console.log('Test case 6', isHappy(100));
// Expected output: true

console.log('Test case 7', isHappy(20));
// Expected output: false

console.log('Test case 8', isHappy(23));
// Expected output: true

console.log('Test case 9', isHappy(11));
// Expected output: false
