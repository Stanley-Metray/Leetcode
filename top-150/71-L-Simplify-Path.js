console.clear();

function simplifyPath(path) {
    const split = path.split('/').filter((val) => {
        if (val.trim() !== "")
            return true;
    });
    let stack = [];
    for (let i = 0; i < split.length; i++) {
        if (stack.length > 0 && split[i] === '..')
            stack.pop();
        else if (split[i] !== '' && split[i] !== '.' && split[i] !== '..')
            stack.push(split[i]);
    }

    let result = '';

    while (stack.length > 0)
        result = `/${stack.pop()}${result}`;
    return result ? result : '/';
}

// Test cases for you to try

console.log("Test Case 1: ", simplifyPath("/home/"));
// Expected Output: "/home"

console.log("Test Case 2: ", simplifyPath("/home//foo/"));                
// Expected Output: "/home/foo"

console.log("Test Case 3: ", simplifyPath("/home/user/Documents/../Pictures")); 
// Expected Output: "/home/user/Pictures"

console.log("Test Case 4: ", simplifyPath("/../"));                       
// Expected Output: "/"

console.log("Test Case 5: ", simplifyPath("/.../a/../b/c/../d/./"));      
// Expected Output: "/.../b/d"

console.log("Test Case 6: ", simplifyPath("/a/./b/../../c/"));            
// Expected Output: "/c"

console.log("Test Case 7: ", simplifyPath("/a//b////c/d//././/.."));      
// Expected Output: "/a/b"

console.log("Test Case 8: ", simplifyPath("/./././"));                    
// Expected Output: "/"

console.log("Test Case 9: ", simplifyPath("/a/.."));                      
// Expected Output: "/"

console.log("Test Case 10: ", simplifyPath("/a/b/c/../d/e/.."));          
// Expected Output: "/a/b/d"
