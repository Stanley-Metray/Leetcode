console.clear();

function romanToInt(s) {
    let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    let integer = 0;

    for (let i = 0; i < s.length; i++) {
        let currentValue = map.get(s[i]);
        let nextValue = map.get(s[i + 1]);

        if (i === s.length - 1)
            integer += currentValue;
        else if (currentValue >= nextValue)
            integer += currentValue;
        else
            integer -= currentValue;
    }
    return integer;
}

// Test Case 1: Simple Roman numeral
const input1 = "III";
const output1 = romanToInt(input1);
console.log(output1); // Expected output: 3

// Test Case 2: Roman numeral with multiple symbols
const input2 = "LVIII";
const output2 = romanToInt(input2);
console.log(output2); // Expected output: 58

// Test Case 3: Roman numeral with subtraction cases
const input3 = "MCMXCIV";
const output3 = romanToInt(input3);
console.log(output3); // Expected output: 1994

// Test Case 4: Single symbol Roman numeral
const input4 = "X";
const output4 = romanToInt(input4);
console.log(output4); // Expected output: 10

// Test Case 5: Complex Roman numeral
const input5 = "CDXLIV";
const output5 = romanToInt(input5);
console.log(output5); // Expected output: 444

// Test Case 6: Edge case with minimum value
const input6 = "I";
const output6 = romanToInt(input6);
console.log(output6); // Expected output: 1

// Test Case 7: Edge case with maximum value
const input7 = "MMMCMXC";
const output7 = romanToInt(input7);
console.log(output7); // Expected output: 3990

