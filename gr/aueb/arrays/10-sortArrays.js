const cities = ["Paris", "London", "Berlin", "Athens"];
const numbers = [10, 101, 103, 77, 99, 123, 690, 590];

console.log(cities.sort());         //ASCI based
console.log(numbers.sort());        //ASCI based -- edw me noumera de tha doulepsei

// numbers.sort(function(a,b) {
//   if (a > b) return 1
//   if (a < b) return -1
//   if (a===b) return 0
// })

numbers.sort(function(a, b) {
  return a - b;                 //ASC -- DESC -> b - a
})

console.log(numbers);

console.log(numbers.reverse());
