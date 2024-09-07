console.clear();

function intToRoman(num) {
    let nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let romans= ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let lastIndex = nums.length - 1;
    let result = '';
    let x = num;
    while(x!==0)
    {
        if(x>=nums[lastIndex])
        {
            x = x - nums[lastIndex];
            result += romans[lastIndex];
        }
        else
            lastIndex--;
    }

    return result;
}


console.log(intToRoman(1));    // Expected Output: "I"
console.log(intToRoman(3));    // Expected Output: "III"
console.log(intToRoman(4));    // Expected Output: "IV"
console.log(intToRoman(9));    // Expected Output: "IX"
console.log(intToRoman(58));   // Expected Output: "LVIII"
console.log(intToRoman(1994)); // Expected Output: "MCMXCIV"
console.log(intToRoman(3749)); // Expected Output: "MMMDCCXLIX"
console.log(intToRoman(49));   // Expected Output: "XLIX"
console.log(intToRoman(3999)); // Expected Output: "MMMCMXCIX"
console.log(intToRoman(500));  // Expected Output: "D"
