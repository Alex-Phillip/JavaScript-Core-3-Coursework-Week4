// let carsSold = [
//   { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
//   { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
//   { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
//   { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
//   { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
//   { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
//   { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
// ];

function sales(carsSold) {
    // create empty object to hold results
  let result = {};
  // loop through object, and for each item:
  for (const car of carsSold) {
  // define and create a key in result object
    result[car.make]
    // if the key already exists, add the new price to the existing price
    ? result[car.make] += car.price
    // if the key doesn't already exist, create it and define as the price
    : result[car.make] = car.price
  };
  return result
}

// console.log(sales(carsSold));

module.exports = sales;
