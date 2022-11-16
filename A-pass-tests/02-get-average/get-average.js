// The input is an array of numbers and strings.
// Return the average of all the numbers.
// Be sure to exclude the strings

function average(numbers) {
    let numbersOnly = numbers.filter((item) => typeof item === "number");
    let total = numbersOnly.reduce((p,c) => p + c, 0);
    let average = total / numbersOnly.length;
    return average;
};


module.exports = average;
