let in1 = [4, 55, "850", 729, "40", 6];

function getLargestNumber(array) {
  let sortedArr = array.sort();
  return sortedArr[sortedArr.length - 1];
}


console.log(getLargestNumber(in1));

module.exports = getLargestNumber;
