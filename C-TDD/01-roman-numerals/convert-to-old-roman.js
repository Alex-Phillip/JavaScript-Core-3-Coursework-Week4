function convertToOldRoman(n) {
  const numerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let roman = "";
  for (let item in numerals) {
    while (numerals[item] <= n) {
      roman += item;
      n -= numerals[item];
    }
  }
}

module.exports = convertToOldRoman;
