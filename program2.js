var romanToInt = function(s) {
    // Map each Roman numeral to its corresponding integer value
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        const currentValue = romanValues[s[i]];
        // Get the value of the next Roman numeral (if any)
        const nextValue = romanValues[s[i + 1]];
        
        // If the current value is smaller than the next value, subtract it
        if (currentValue < nextValue) {
            total -= currentValue;
        } else {
            // Otherwise, add the current value
            total += currentValue;
        }
    }
    
    return total;
};

module.exports = { romanToInt };
