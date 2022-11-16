let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  expect(getLargestNumber([1, 5, 84, 70, 44, 3])).toEqual(84);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
