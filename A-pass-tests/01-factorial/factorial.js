// int is an integer.
// A factorial is the product of all non-negative integers
// less than or equal to the initial integer.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
    let result = 1;
    if(int > 0) {
        for (let i = 1; i <= int; i++) {
            result *= i;
        };
        return result;
    } else {
        return 1;
    };
};

module.exports = factorial; 
