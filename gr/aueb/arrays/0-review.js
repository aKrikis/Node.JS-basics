const cities = ["Athens", "Paris", "Toronto"]

// add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city);

cities[1] = "London";

cities.forEach(c => console.log(c))

cities.sort();

cities.sort((a, b) => a.localeCompare(b))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b));   //new sorted array

//copy Array - shallow copy
const citiesCopy1= JSON.parse(JSON.stringify(cities));

const cities2 = structuredClone(cities)                       // deep copy

//Shallow copiew -- spread operatore 
const nums = [1, 2, 3, 4, 5]                           //... spread operators
let maxVal = Math.max(...nums);
let maxIndex = cities.indexOf(maxVal);
console.log (`Max Value: ${maxVal}, Max Index: ${maxIndex}`);



