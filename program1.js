var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
       
        if (char in matchingBrackets) {
         
            const topElement = stack.length > 0 ? stack.pop() : '#';


            if (topElement !== matchingBrackets[char]) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }


    return stack.length === 0;
};

module.exports = { isValid };