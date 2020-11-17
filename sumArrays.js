// Function that turns an array into an integer value
function arrayToInteger(a) {
    let number = '';
    a.forEach((value) => {
        // Turn each value in the array into a string 
        // to be concat to the number string
        number += value.toString(10);
    });
    return number;
}
// Add arrays function
function addArrays(a1, a2) {
    try {
        // If arrays are empty
        if (a1.length === 0 && a2.length === 0) {
            // Return empty array
            return [];
        } else {
            // Get array values as a single integer
            let sum1 = arrayToInteger(a1);
            let sum2 = arrayToInteger(a2);
            // Convert integer string into an actual integer
            // To avoid NaN from '' using logical OR to get zero value
            sum1 = parseInt(sum1) || 0;
            sum2 = parseInt(sum2) || 0;
            // Sum the integer values
            let total = sum1 + sum2;
            // If total is zero
            if (total === 0) {
                // Return empty array
                return [];
            // If total is negative
            } else if (total < 0) {
                // Convert to positive number
                total *= -1;
                // Turn it into an array
                total = Array.from(String(total), Number);
                // Convert first value to negative
                total[0] *= -1;
                // Return array
                return total;
            // Else
            } else {
                // Turn total into an array and return it
                return Array.from(String(total), Number);
            }
        }
    } catch (error) {
        return error;
    }
}
// Call addArrays function
console.log(addArrays([3,2,9], [1,2])); // Expected output: [3,4,1]
console.log(addArrays([4,7,3], [1,2,3])); // Expected output: [5,9,6]
console.log(addArrays([1], [5,7,6])); // Expected output: [5,7,7]
console.log(addArrays([], [])); // Expected output: []
console.log(addArrays([1], [])); // Expected output: [1]
console.log(addArrays([], [1])); // Expected output: [1]
console.log(addArrays([1,2], [-1])); // Expected output: [1,1]
console.log(addArrays([-1,2], [1])); // Expected output: [-1,1]
console.log(addArrays([1,1], [-1,1])); // Expected output: []