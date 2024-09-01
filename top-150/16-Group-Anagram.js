// Function structure
function groupAnagrams(strs) {
    let result = [];
    let map = new Map();

    for(let i=0; i<strs.length; i++)
    {
        let str = strs[i].split('').sort().join('');
       
        if(map.has(str))
        {
            let arr = map.get(str);
            arr.push(strs[i]);
            map.set(str, arr);
        }
        else
            map.set(str, [strs[i]]);
    }
    
    for(let [key,value] of map)
        result.push(value);

    return result;
}

// Test cases

// Test case 1
console.log("Test Case 1:", groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
// Expected output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test case 2
console.log("Test Case 2:", groupAnagrams([""])); 
// Expected output: [[""]]

// Test case 3
console.log("Test Case 3:", groupAnagrams(["a"])); 
// Expected output: [["a"]]

// Additional test cases

// Test case 4: No anagrams, each word is unique
console.log("Test Case 4:", groupAnagrams(["cat","dog","bird"])); 
// Expected output: [["cat"],["dog"],["bird"]]

// Test case 5: All words are anagrams of each other
console.log("Test Case 5:", groupAnagrams(["abc","bca","cab"])); 
// Expected output: [["abc","bca","cab"]]

// Test case 6: Multiple anagram groups
console.log("Test Case 6:", groupAnagrams(["listen","silent","enlist","rat","tar","art"])); 
// Expected output: [["listen","silent","enlist"],["rat","tar","art"]]

// Test case 7: Single word in the list
console.log("Test Case 7:", groupAnagrams(["abcdef"])); 
// Expected output: [["abcdef"]]

// Test case 8: Empty array
console.log("Test Case 8:", groupAnagrams([])); 
// Expected output: []

// Test case 9: Words with different lengths
console.log("Test Case 9:", groupAnagrams(["abcd","dcba","a","b","ab","ba","abc"])); 
// Expected output: [["abcd","dcba"],["a"],["b"],["ab","ba"],["abc"]]

// Test case 10: Words with repeated letters
console.log("Test Case 10:", groupAnagrams(["aa","aa","aaa","aaaa","a"])); 
// Expected output: [["aa","aa"],["aaa"],["aaaa"],["a"]]
